export class UploadResultDto {
    wasSuccesfull: boolean;
    message: string;

    constructor(wasSuccesfull, message) {
        this.wasSuccesfull = wasSuccesfull;
        this.message = message;
    }
}