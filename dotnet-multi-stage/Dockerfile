FROM mcr.microsoft.com/dotnet/core/sdk:3.1 as build
COPY program.cs .
RUN dotnet /usr/share/dotnet/sdk/3.1.100/Roslyn/bincore/csc.dll -r:/usr/share/dotnet/sdk/3.1.100/ref/netstandard.dll program.cs

FROM mcr.microsoft.com/dotnet/core/runtime:3.1
COPY --from=build program.exe .
COPY --from=build /usr/share/dotnet/sdk/3.1.100/dotnet.runtimeconfig.json .
CMD dotnet exec --runtimeconfig dotnet.runtimeconfig.json program.exe
