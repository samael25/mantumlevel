export interface Auth {
    IdUsuario:         number;
    Nombre:            string;
    Descripcion:       string;
    Activo:            boolean;
    FechaInactividad:  null;
    FechaCreacion:     Date;
    FechaModificacion: Date;
    IdRol:             number;
    Imagen:            string;
    FechaNacimiento:   Date;
    LugarNacimiento:   string;
    Trayectoria:       string;
    NombreReal:        string;
    NombreRol:         string;
}
