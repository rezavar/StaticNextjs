
export function getBasePath():string{
    return process.env?.basePath || '';
}

export function getManifestFile():string{
    let manifest:string = 'manifest.json';
    const path:string = getBasePath();
    const lastSlashIndex:number = path.lastIndexOf('/');
    if(lastSlashIndex){
        const prefix :string= path.substring(lastSlashIndex + 1);
        manifest = prefix+'-'+manifest
    }
    return path+'/'+manifest;
}