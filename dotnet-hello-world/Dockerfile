FROM mcr.microsoft.com/dotnet/core/sdk:3.1
COPY program.cs .
RUN dotnet /usr/share/dotnet/sdk/3.1.100/Roslyn/bincore/csc.dll -r:/usr/share/dotnet/sdk/3.1.100/ref/netstandard.dll program.cs
CMD dotnet exec --runtimeconfig /usr/share/dotnet/sdk/3.1.100/dotnet.runtimeconfig.json program.exe
