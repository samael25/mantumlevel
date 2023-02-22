export interface Usuario {
    IdUsuario:         number;
    Nombre:            string;
    Descripcion:       string;
    Activo:            boolean;
    FechaInactividad:  Date | null;
    FechaCreacion:     Date;
    FechaModificacion: Date;
    IdRol:             number;
    Imagen:            string;
    NombreRol:         string;
}
