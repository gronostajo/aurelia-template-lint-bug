export interface Entity {
    pending?: boolean;
}

export class Language implements Entity {
    name: string;
}
