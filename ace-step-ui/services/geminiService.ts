import { GoogleGenAI, Type } from "@google/genai";

// Get API key dynamically to ensure it's available after Vite injection
const getApiKey = () => process.env.GEMINI_API_KEY || process.env.API_KEY || '';

// Create AI instance lazily
let aiInstance: GoogleGenAI | null = null;
const getAI = () => {
  if (!aiInstance) {
    const apiKey = getApiKey();
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
};

// Timeout wrapper for promises
const withTimeout = <T>(promise: Promise<T>, timeoutMs: number, errorMessage: string): Promise<T> => {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => 
      setTimeout(() => reject(new Error(errorMessage)), timeoutMs)
    )
  ]);
};

export type GeminiModel = 'gemini-3-flash-preview' | 'gemini-3-pro-preview' | 'gemini-flash-latest';

export const MODEL_OPTIONS = [
  {
    id: 'gemini-3-flash-preview' as GeminiModel,
    name: 'Gemini 3 Flash',
    icon: '⚡',
    description: 'Fastest generation with thinking'
  },
  {
    id: 'gemini-3-pro-preview' as GeminiModel,
    name: 'Gemini 3 Pro',
    icon: '👑',
    description: 'Best quality and reasoning'
  },
  {
    id: 'gemini-flash-latest' as GeminiModel,
    name: 'Gemini 2.5 Flash',
    icon: '💰',
    description: 'Most cost-effective'
  }
];

export interface GeneratedSongData {
  title: string;
  lyrics: string;
  tags: string[];
  bpm: number;
  keyScale: string;
  timeSignature: string;
}

export const generateSongData = async (
  topic: string,
  style: string,
  modelId: GeminiModel = 'gemini-flash-latest'
): Promise<GeneratedSongData> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    // Mock response if no API key is present
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          title: "Neon Echoes (Mock)",
          lyrics: "[Verse]\nChecking for API key...\nNone found, so here is a mock.\n\n[Chorus]\nVirtual sounds in a digital world.",
          tags: ["electronic", "mock", "ambient"],
          bpm: 120,
          keyScale: "C major",
          timeSignature: "4/4"
        });
      }, 2000);
    });
  }

  try {
    const prompt = `Generate a complete song based on this description: "${topic}". ${style ? `Style preference: "${style}".` : ''}

You MUST return a JSON object with EXACTLY these fields:
{
  "title": "Song Title Here",
  "lyrics": "[Verse]\\nLine one\\nLine two\\n\\n[Chorus]\\nChorus line one\\nChorus line two",
  "style": "detailed, comma-separated, style, tags, describing, genre, mood, instruments, 200-300, characters",
  "bpm": 120,
  "keyScale": "C major",
  "timeSignature": "4/4"
}

FIELD REQUIREMENTS:
- title: 1-5 words, creative and catchy
- lyrics: MUST use [Verse], [Chorus], [Bridge], [Outro] headers with \\n line breaks
- style: DETAILED description (200-300 characters) with comma-separated tags. Include: genre, mood, atmosphere, instruments, production style, vocal style, era/influence, and sonic qualities.
  Example: "dark ambient, eerie, haunting, cinematic, gothic, melancholic, surreal, experimental, synthesizers, theremin, sub-bass drone, atmospheric pads, reverb-drenched"
- bpm: Integer between 60-180 (no decimals)
- keyScale: Format "X major" or "X minor" where X is A-G with optional # or b (e.g., "C major", "F# minor", "Bb major")
- timeSignature: EXACTLY one of "4/4", "3/4", "6/8", "2/4" (no spaces)

MATCHING GUIDELINES (use as suggestions, not strict rules):
- Upbeat/dance: Usually faster BPM (120-140), often major keys
- Slow ballads: Usually slower BPM (60-90), can be major or minor
- Rock/Pop: Typically 100-130 BPM, 4/4 time
- Jazz: Wide range 80-160 BPM, various time signatures
- Electronic: Often 120-140 BPM, any key works
- Folk/Acoustic: Usually 80-120 BPM, simple or complex keys
- Feel free to break these rules for creative effect - trust the song's emotional needs

Return ONLY the JSON object, no markdown, no explanation.`;

    // Configure model-specific settings
    const config: any = {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: {
            type: Type.STRING,
            description: "A catchy song title (1-5 words)"
          },
          lyrics: {
            type: Type.STRING,
            description: "Song lyrics with proper [Verse], [Chorus], [Bridge] headers and line breaks"
          },
          style: {
            type: Type.STRING,
            description: "Detailed style description (200-300 characters) with comma-separated tags including genre, mood, instruments, production style"
          },
          bpm: {
            type: Type.INTEGER,
            description: "Beats per minute (60-180) matching the song's energy"
          },
          keyScale: {
            type: Type.STRING,
            description: "Musical key signature (e.g., 'C major', 'A minor', 'F# major')"
          },
          timeSignature: {
            type: Type.STRING,
            description: "Time signature (e.g., '4/4', '3/4', '6/8')"
          }
        },
        required: ["title", "lyrics", "style", "bpm", "keyScale", "timeSignature"]
      }
    };

    // Add thinking config for Gemini 3 models
    if (modelId.includes('gemini-3')) {
      config.generationConfig = {
        thinkingConfig: {
          thinkingLevel: "HIGH"
        }
      };
    } else {
      // For 2.5 Flash, use thinking budget
      config.generationConfig = {
        thinkingConfig: {
          thinkingBudget: -1
        }
      };
    }

    // 30 second timeout for the API call
    const response = await withTimeout(
      getAI().models.generateContent({
        model: modelId,
        contents: prompt,
        config
      }),
      30000,
      "Request timed out after 30 seconds. The API may be slow or unavailable."
    );

    const jsonText = response.text;
    if (!jsonText) throw new Error("No response from Gemini");

    const parsed = JSON.parse(jsonText);

    // Validate and clean up the response
    const rawTimeSignature = parsed.timeSignature?.toString().trim() || '4/4';
    const normalizedTimeSignature = rawTimeSignature.replace(/\s/g, ''); // Remove spaces
    const validTimeSignatures = ['4/4', '3/4', '6/8', '2/4', '12/8', '7/8', '5/4'];
    
    // Validate key signature format
    const rawKeyScale = parsed.keyScale?.toString().trim() || "C major";
    const validKeyPattern = /^[A-G][#b]?\s*(major|minor)$/i;
    const normalizedKeyScale = validKeyPattern.test(rawKeyScale) 
      ? rawKeyScale.replace(/\s+/g, ' ').trim() // Normalize spacing
      : "C major";
    
    // Parse style - it should be a comma-separated string now
    let styleTags: string[];
    if (parsed.style) {
      // If style is a string, split by commas
      styleTags = parsed.style.split(',').map((s: string) => s.trim()).filter(Boolean);
    } else if (parsed.tags && Array.isArray(parsed.tags)) {
      // Fallback for old format
      styleTags = parsed.tags;
    } else {
      styleTags = ["pop", "generated", "ai"];
    }
    
    const result: GeneratedSongData = {
      title: parsed.title?.trim() || "Untitled Song",
      lyrics: parsed.lyrics?.trim() || "[Verse]\nNo lyrics generated",
      tags: styleTags,
      bpm: typeof parsed.bpm === 'number' && parsed.bpm >= 60 && parsed.bpm <= 180 
        ? parsed.bpm 
        : 120,
      keyScale: normalizedKeyScale,
      timeSignature: validTimeSignatures.includes(normalizedTimeSignature) 
        ? normalizedTimeSignature 
        : '4/4'
    };

    // Ensure lyrics have proper formatting
    if (!result.lyrics.includes('[')) {
      result.lyrics = `[Verse]\n${result.lyrics}`;
    }

    return result;

  } catch (error: any) {
    console.error("Gemini generation error:", error);
    
    // Provide more specific error messages
    let errorMessage = "Could not generate lyrics at this time.";
    if (error.message?.includes('timeout')) {
      errorMessage = "Request timed out. The API is taking too long. Try again or select a different model.";
    } else if (error.message?.includes('API key')) {
      errorMessage = "API key issue. Please check your GEMINI_API_KEY in .env file.";
    } else if (error.message?.includes('rate limit')) {
      errorMessage = "Rate limit hit. Please wait a moment before trying again.";
    }
    
    return {
      title: "Generation Failed",
      lyrics: `[Error]\n${errorMessage}\n\n[Verse]\nPlease try again or check the console for details.`,
      tags: ["error", "retry", "api"],
      bpm: 120,
      keyScale: "C major",
      timeSignature: "4/4"
    };
  }
};

// Retry wrapper with exponential backoff
export const generateSongDataWithRetry = async (
  topic: string,
  style: string,
  modelId: GeminiModel = 'gemini-flash-latest',
  maxRetries: number = 2
): Promise<GeneratedSongData> => {
  let lastError: Error | null = null;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const result = await generateSongData(topic, style, modelId);
      
      // Check if we got a valid result (not the error fallback)
      if (result.title !== "Generation Failed") {
        return result;
      }
      
      // If it's the error fallback, retry
      if (attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000; // 1s, 2s
        console.log(`Attempt ${attempt + 1} failed, retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    } catch (error) {
      lastError = error as Error;
      if (attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000;
        console.log(`Attempt ${attempt + 1} error: ${lastError.message}, retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  // All retries exhausted
  console.error("All retry attempts failed:", lastError);
  return {
    title: "Generation Failed",
    lyrics: "[Error]\nAll retry attempts failed. Please try again later.",
    tags: ["error", "retry", "api"],
    bpm: 120,
    keyScale: "C major",
    timeSignature: "4/4"
  };
};

// Format/Enhance existing content using Gemini
export const formatSongData = async (
  currentStyle: string,
  currentLyrics: string,
  modelId: GeminiModel = 'gemini-flash-latest'
): Promise<GeneratedSongData> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          title: "",
          lyrics: currentLyrics,
          tags: currentStyle.split(',').map(s => s.trim()).filter(Boolean),
          bpm: 120,
          keyScale: "C major",
          timeSignature: "4/4"
        });
      }, 2000);
    });
  }

  try {
    // Different prompts based on what we're enhancing
    let prompt = '';
    
    if (currentLyrics.trim()) {
      // Enhancing both lyrics and style
      prompt = `Enhance and improve this song while keeping its core meaning:

Current Style: "${currentStyle}"
Current Lyrics:
"${currentLyrics}"

Your task:
1. Create a DETAILED style description (200-300 characters) with descriptive tags separated by commas. Include: genre, mood, atmosphere, instruments, production style, vocal style, era/influence, and sonic qualities.
   Example: "dark ambient, eerie, haunting, cinematic, gothic, melancholic, surreal, experimental, synthesizers, theremin, sub-bass drone"
2. Enhance the lyrics to be more poetic and structured (keep the same theme/story)
3. Suggest appropriate BPM, key, and time signature that match the song's mood

Return a JSON object with EXACTLY these fields:
{
  "title": "Improved Song Title",
  "lyrics": "[Verse]\\nImproved line one\\nImproved line two\\n\\n[Chorus]\\nImproved chorus",
  "style": "detailed, comma-separated, style, description, with, many, tags, like, dark, ambient, eerie, haunting",
  "bpm": 120,
  "keyScale": "C major",
  "timeSignature": "4/4"
}`;
    } else {
      // Enhancing just the style
      prompt = `Enhance this music style description to be more professional and descriptive:

Current Style: "${currentStyle}"

Your task:
1. Create a DETAILED style description (200-300 characters) with descriptive tags separated by commas. Include: genre, mood, atmosphere, instruments, production style, vocal style, era/influence, and sonic qualities.
   Example: "boom bap, underground rap, UK rap, experimental spoken-word, gritty, raw, lo-fi, vinyl crackle, heavy bass, conscious lyrics, street poetry"
2. Suggest appropriate BPM, key, and time signature
3. Create a fitting title for this style
4. Generate example lyrics that match this detailed style

Return a JSON object with EXACTLY these fields:
{
  "title": "Song Title",
  "lyrics": "[Verse]\\nExample lyrics based on style\\nMore lyrics here",
  "style": "detailed, comma-separated, style, description, with, many, descriptive, tags",
  "bpm": 120,
  "keyScale": "C major",
  "timeSignature": "4/4"
}`;
    }

    const config: any = {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          lyrics: { type: Type.STRING },
          style: { type: Type.STRING },
          bpm: { type: Type.INTEGER },
          keyScale: { type: Type.STRING },
          timeSignature: { type: Type.STRING }
        },
        required: ["title", "lyrics", "style", "bpm", "keyScale", "timeSignature"]
      }
    };

    if (modelId.includes('gemini-3')) {
      config.generationConfig = { thinkingConfig: { thinkingLevel: "HIGH" } };
    } else {
      config.generationConfig = { thinkingConfig: { thinkingBudget: -1 } };
    }

    const response = await withTimeout(
      getAI().models.generateContent({ model: modelId, contents: prompt, config }),
      30000,
      "Request timed out"
    );

    const jsonText = response.text;
    if (!jsonText) throw new Error("No response from Gemini");

    const parsed = JSON.parse(jsonText);

    return {
      title: parsed.title?.trim() || "",
      lyrics: parsed.lyrics?.trim() || currentLyrics,
      tags: parsed.style ? parsed.style.split(',').map((s: string) => s.trim()).filter(Boolean) : ["pop", "enhanced", "ai"],
      bpm: typeof parsed.bpm === 'number' && parsed.bpm >= 60 && parsed.bpm <= 180 ? parsed.bpm : 120,
      keyScale: parsed.keyScale?.trim() || "C major",
      timeSignature: ['4/4', '3/4', '6/8', '2/4'].includes(parsed.timeSignature) ? parsed.timeSignature : '4/4'
    };

  } catch (error) {
    console.error("Format error:", error);
    return {
      title: "",
      lyrics: currentLyrics,
      tags: currentStyle.split(',').map(s => s.trim()).filter(Boolean),
      bpm: 120,
      keyScale: "C major",
      timeSignature: "4/4"
    };
  }
};
