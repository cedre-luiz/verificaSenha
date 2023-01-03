
function validaSenha(senha){    
    const regex = [ /[a-z]/gm, /[A-Z]/gm , /[0-9]/gm , /[^a-zA-z0-9]/gm, /(.)\1|\s/gm ];
    const minChar = senha.length >= 8;
    const lowerCase = regex[0].test(senha);
    const uperCase =regex[1].test(senha);
    const digit =regex[2].test(senha);
    const specialChar =regex[3].test(senha);
    const noSpaceAndRepet =regex[4].test(senha);
    if(minChar===true
        && lowerCase===true
        && uperCase===true
        && digit===true
        && specialChar===true
        && noSpaceAndRepet===false){
            return {senha, verify:true + '  Atende todos os parametros'}
        }else{
            return {senha, 
                minChar:`${minChar}, --deve ter pelo menos 8 caracteres`, lowerCase:`${lowerCase}, --deve conter letras minúsculas`, uperCase:`${uperCase}, --deve conter letras minusculas`, 
                digit:`${digit}, --deve conter pelo menos um numero 0-9`, specialChar:`${specialChar}, --deve conter pelo menos um      caractere especial (!@#$%&*+=)`,
                noSpaceAndRepet:`${noSpaceAndRepet}, --Não pode conter espaços em branco, nem caracteres repetidos em sequencia(aa,22,@@)`
                }
        }
    }

export default validaSenha