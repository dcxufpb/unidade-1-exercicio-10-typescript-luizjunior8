export class Loja {

    constructor(public nome_loja: string, public logradouro: string, public numero: number, public complemento: string,
        public bairro: string, public municipio: string, public estado: string, public cep: string,
        public telefone: string, public observacao: string, public cnpj: string, public inscricao_estadual: string) { }


    public valida_dados_obrigatorios(): void {
        
        if (!this.nome_loja){
            throw new Error (`O campo nome da loja é obrigatório`)
        }
        if (!this.logradouro){
        throw new Error (`O campo logradouro do endereço é obrigatório`)
        }
        if (!this.municipio){
        throw new Error (`O campo município do endereço é obrigatório`)
        }
        if (!this.estado){
        throw new Error (`O campo estado do endereço é obrigatório`)
        }
        if (!this.cnpj){
        throw new Error (`O campo CNPJ da loja é obrigatório`)
        }
        if (!this.inscricao_estadual){
        throw new Error (`O campo inscrição estadual da loja é obrigatório`)
        }
    }

    public dados_loja(): string {

        let _numero : string = this.numero ? `${this.numero}` : "s/n"

        let _complemento : String = this.complemento ? ` ${this.complemento}` : ""

        let _bairro : String = this.bairro ? `${this.bairro} - ` :  ""
    
        let _cep : String = ""
    
        let _telefone : String = ""
    
        if (this.cep){
            _cep = `CEP:${this.cep}`
            if (this.telefone){
            _telefone = ` Tel ${this.telefone}`
            } 
        }else{
            _telefone = `Tel ${this.telefone}`
        }
        let _observacao : String = this.observacao ? `${this.observacao}` : ""

    return `${this.nome_loja}
${this.logradouro}, ${_numero}${_complemento}
${_bairro}${this.municipio} - ${this.estado}
${_cep}${_telefone}
${_observacao}
CNPJ: ${this.cnpj}
IE: ${this.inscricao_estadual}
`
        
    }
}