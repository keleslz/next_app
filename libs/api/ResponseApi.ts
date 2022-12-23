export enum ResponseCode {
    ok = 200,
    internalError = 500
}
export abstract class ResponseApi {
    public httpCode: ResponseCode = ResponseCode.ok
}