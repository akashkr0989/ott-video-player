export interface AddDoType{
    content: string,
    contentError:string|null
}

export interface ListToDoType extends AddDoType {
    id: number| null;
}

export interface ShowList{
    id: number,
    content: string
}
