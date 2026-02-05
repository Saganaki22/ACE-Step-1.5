@echo off
echo Killing processes on ports 8000-8008 and 3000-3008...
echo.

for %%p in (8000 8001 8002 8003 8004 8005 8006 8007 8008 3000 3001 3002 3003 3004 3005 3006 3007 3008) do (
    for /f "tokens=5" %%a in ('netstat -ano ^| findstr :%%p') do (
        taskkill /PID %%a /F >nul 2>&1
        if !errorlevel! equ 0 (
            echo Killed process %%a on port %%p
        )
    )
)

echo.
echo All processes on ports 8000-8008 and 3000-3008 ended.
pause