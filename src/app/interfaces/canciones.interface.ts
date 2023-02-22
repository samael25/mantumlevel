export interface Cancion {
    IdCancion: number;
    Nombre:    string;
    Genero:    Genero;
}

export enum Genero {
    AmbientBlackMetal = "Ambient Black Metal",
    BlackMetal = "Black Metal",
    MelodicBlackMetal = "Melodic Black Metal",
}
