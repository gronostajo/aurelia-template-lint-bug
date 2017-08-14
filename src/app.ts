import {Language} from "./model";

export class App {
    languages: Language[];

    constructor() {
        this.languages = [
            {name: 'foo'},
            {name: 'bar', pending: false},
            {name: 'baz', pending: true},
        ];
    }
}
