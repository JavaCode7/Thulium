@echo off
if "%1" == "run" (
	bin\thu1.exe "%2" "%3"
	bin\thu2.exe "%3"
	bin\thu3.exe "%3"
	bin\thu4.exe "%3"
) else if "%1" == "build" (
	bin\thu1.exe "%2" "%3"
	bin\thu2.exe "%3"
	bin\thu3.exe "%3"
) else if "%1" == "execute" (
	bin\thu4.exe "%2"
) else if "%1" == "version" (
	echo Thulium v2.0.0
) else if "%1" == "" (
	echo. Thulium Cmd Usage
	echo.  thulium command [args]
	echo.
	echo. Where command can be
	echo.  run [2 args]: compiles and runs the first arg with the compiled file having the name of the second.
	echo.  build [2 args]: compiles the first arg with the output of the second.
	echo.  execute [1 arg]: executes the compiled file with the name matching the string form of the first arg.
	echo.  version [0 args]: prints the current version.
)
exit /b