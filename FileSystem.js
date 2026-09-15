class FileSystem{
    constructor(){
        this.directory={'root':{}};
        this.currentDir=this.directory['root'];
        this.currentDirPath='root'
    }

    createDirectory(name){
       this.currentDir[name]={};
    }

    changeDirectory(path){
        const pathArr=path.split('/');
        let currentPath=this.directory;
        pathArr.forEach((p)=>{
            currentPath=currentPath[p]
        });
        this.currentDir=currentPath;
        this.currentDirPath=path

    }
    addFileName(name){
        if(this.currentDir?.files){
            this.currentDir.files.push(name)
        }else{
            this.currentDir.files=[name]
        }
    }
    deleteFile(name){
        this.currentDir=this.currentDir.files.filter((path)=>path!=name);
    }

    getRootDirectory(){
        return this.directory['root'];
    }
}

const dir=new FileSystem();
dir.createDirectory('parent');
dir.createDirectory('parent2');
dir.changeDirectory('root/parent')
dir.addFileName('index.html');
console.log(dir.getRootDirectory())
