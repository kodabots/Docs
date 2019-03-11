
export interface IFbWebviewNextApi {
    sent_block_id?: string;
    update_user_data : {
        [key: string] : string | number
    }
}