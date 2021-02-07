@echo off
if "%1" == "run" (
	bin\thu1.exe "%2" "%3"
) else if "%1" == "build" (
	bin\thu1.exe "%2" "%3"
) else if "%1" == "" (
	echo. Thulium Cmd Usage:
	echo.  thulium command [args]
	echo.
	echo. where command can be:
	echo.  run (2 args): compiles and runs the first arg with the compiled file having the name of the second.
	echo.  build (2 args): compiles the first arg with the output of the second.
)