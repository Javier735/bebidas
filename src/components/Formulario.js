import React from 'react';

const Formulario = () => {
    return (  
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Busca Bebidas por Categoria o Ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Busca por ingrediente"
                    />
                </div>
                <div className="col-md-4 mt-2">
                    <select
                        className="form-control"
                        name="categoria"
                    >
                        <option value="">--Selecciona Categoría</option>
                    </select>
                </div>
                <div className="col-md-4 mt-2">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary" 
                        value="Buscar bebidas"
                    />
                </div>
            </div>
        </form>
    );
}
 
export default Formulario;