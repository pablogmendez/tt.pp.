@echo off

set comando=%1

if %comando% == start (
	echo iniciando fronend
	cd frontend
	start gulp
	cd ..

	echo iniciando base de datos
	start mongo.bat
	sleep 10

	echo iniciando backend
	start backend.bat

	echo "Blue Games iniciado"
	pause
) else if %comando% == stop (
	rem Flasheo las variables
	set PID=""
	set PID2=""
	set PID3=""
	set PID5=""

	taskkill /f /im node.exe
	taskkill /f /im mongod.exe
	
	wmic process get parentprocessid,name|find "WMIC" > temp.txt
	set PID=<temp.txt

	set PID2=%PID: =%
	set PID5=%PID2:.=%
	set PID3=%PID5:~-4,4%
	
	for /f "skip=3 tokens=2 delims= " %%a in ('tasklist /fi "imagename eq cmd.exe"') do (
		if "%%a" neq "%PID3%" (
			TASKKILL /PID %%a /f >nul 2>nul
			REM echo %%a
			REM echo %PID3%
			REM echo 333
			REM echo 444
		)
	)
	
	echo "Blue Games terminado"
	pause
) 