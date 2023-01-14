
export interface ReqRespOrdenesListado {
    detail_row:          DetailRow;
    _id:                 string;
    IdOrdenOK:           string;
    IdOrdenBK:           string;
    IdTipoOrdenOK:       string;
    TipoOrden:           string;
    IdRolOK:             string;
    IdPersonaOK:         string;
    cat_ordenes_estatus: CatOrdenesSEstatus[];
    ordenes_info_ad:     OrdenesSInfoAd[];
    ordenes_presenta_ps: OrdenesPresentaP[];
    ordenes_forma_pago:  OrdenesFormaPago[];
}

export interface CatOrdenesSEstatus {
    detail_row:  DetailRow;
    _id?:         string;
    IdEstatusOK: string;
    Estatus:     string;
    Actual:      Act;
    Observacion: string;
}

export enum Act {
    S = "S",
}

export interface DetailRow {
    Activo:         Act;
    Borrado:        Borrado;
    detail_row_reg: DetailRowReg[];
}

export enum Borrado {
    N = "N",
}

export interface DetailRowReg {
    FechaReg:   string;
    UsuarioReg: string;
}


export interface OrdenesFormaPago {
    _id?:             string;
    IdTipoPagoOk:    string;
    TipoPago:        string;
    MontoPagado:     number;
    MontoRecibido:   number;
    MontoDevuelto:   number;
    ordenes_info_ad: OrdenesSInfoAd[];
}

export interface OrdenesSInfoAd {
    detail_row?:   DetailRow;
    _id?:          string;
    IdEtiqueta?:   string;
    Etiqueta?:     string;
    Valor?:        string;
    IdSeccionOK?:  string;
    Seccion?:      string;
    Secuencia?:    number;
    IdEtiquetaOK?: string;
}

export interface OrdenesPresentaP {
    detail_row:                      DetailRow;
    _id?:                             string;
    IdProdServOK:                    string;
    IdPresentaPSBK:                  string;
    DesPresentaPS:                   string;
    Cantidad:                        number;
    PrecioUniSinIVA:                 number;
    PrecioUniConIVA:                 number;
    PorcentajeIVA:                   number;
    MontoUniIVA:                     number;
    SubTotalSinIVA:                  number;
    SubTotalConIVA:                  number;
    cat_ordenes_presenta_ps_estatus: CatOrdenesSEstatus[];
    ordenes_presenta_ps_info_ad:     OrdenesSInfoAd[];
    ordenes_presenta_ps_paq:         OrdenesPresentaPSPaq[];
}

export interface OrdenesPresentaPSPaq {
}
