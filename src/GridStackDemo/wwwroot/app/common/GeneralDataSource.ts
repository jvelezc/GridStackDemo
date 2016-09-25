export class GeneralSource {
    public url: string;
}

export interface GeneralDataSource {
    data: GeneralSource;
    post?: GeneralSource;
    update?: GeneralSource;
    delete?: GeneralSource;

}