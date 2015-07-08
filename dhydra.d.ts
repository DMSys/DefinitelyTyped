declare var dHydra: {
    
    SqlClient(): dHydraSqlClient;
    
	IO: {
		FileReader(): dHydraIOFileReader;
        
        FileWriter(): dHydraIOFileWriter;
        
        SCP: dHydraSCP;
	}
    
    Session: dHydraSession;
    
    Camera : dHydraCamera;
    
    Platform: dHydraPlatform;
}

interface dHydraIOFileReader 
{
	Open(filePath: string): boolean;

	/**
     * Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
     */
    ReadLine(): string;

    Close(): void;
}

interface dHydraIOFileWriter
{
    Open (filePath: string): boolean;

    Write (value): boolean;

    WriteLine (value): boolean;
    
	Flush(): boolean;
   
    Close(): boolean;
}

interface dHydraSqlClient {
    /** Opens a connection to the database
    */
    OpenConnection (jsonConnection): boolean;
    
    /** Closes the connection to the database
    */
    CloseConnection (): boolean;
    
    /** Execute JSON command to the database
    */
    ExecuteQuery (jsonCommand: string): string;
}

interface dHydraSession {

    Get (name, defaultValue): string;

    Set (name, value): void;

    Clear(): void;
}

interface dHydraCamera {
    
    TakePicture(): void;
}

interface dHydraPlatform {

    Name: string,
    Device: {
        /** Gets the model of the device. For example: "Nexus 5" or "iPhone".
        */
        Model: string,
        /** Gets the model of the device. For example: "Android" or "iOS".
        */
        OS: string,
        /** Gets the OS version. For example: 4.4.4(android), 8.1(ios)
        */
        OSVersion: string,
        /** Gets the OS version. For example: 19(android), 8.1(ios).
        */
        sdkVersion: string,
        /** Gets the type current device. Available values: "phone", "tablet".
        */
        deviceType: string
    },
    Screen: {
        mainScreen: string
    }
}

interface dHydraSCP
{
    OpenSftp(): void;
    
    OpenScp(): void;
    
    OpenFtp(): void;
    
    OpenWebdav(): void;
    
    Close(): void;
    
    CreateDirectory(path: string): string;
    
    ListDirectory(path: string): string;
    
    GetFiles(remotePath: string, localPath: string, remove: Boolean): string;
    
    PutFiles(localPath: string, remotePath: string, remove: Boolean): string;
}