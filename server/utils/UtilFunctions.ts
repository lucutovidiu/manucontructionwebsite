export class Utils{
    public static convertDashToUnderscore(str:string){
        return str.replace(/-/g,"l").substr(Math.round(str.length/2),str.length);
    }
}