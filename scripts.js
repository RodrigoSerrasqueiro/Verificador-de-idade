function verificar (){
  let data = new Date()
  let ano = data.getFullYear()
  let anoNasc = document.getElementById('txt-ano')
  let resultado = document.getElementById('resultado')
  let sexo = document.getElementsByName('radio-sexo')
  let idade = ano-anoNasc.value
  let img = document.createElement('img')
  img.setAttribute('id','foto')
  let genero = ''
  
  //Verifica se o usuário digitou algum valor e se esse valor é válido.
  if(anoNasc.value.length == 0 || idade > 130 || anoNasc.value > ano){
    alert('[ERROR] Verifique os dados e tente novamente.')
    location.reload()
  }else{
    if(sexo[0].checked){ //verifica o gênero informado pelo usuário. Caso for 'HOMEM' exec esse bloco.
      genero= 'HOMEM' 
      if(idade >= 0 && idade <2){
        img.setAttribute('src', 'recemNascidoHomem.jpg')
      }else if(idade <5){
        img.setAttribute('src', 'BebeHomem.jpg')
      }else if(idade <12){
        img.setAttribute('src', 'CriancaHomem.jpg')
      }else if(idade <18){
        img.setAttribute('src', 'AdolescenteHomem.jpg')
      }else if(idade <30){
        img.setAttribute('src', 'JovemHomem.jpg')
      }else if(idade <40){
        img.setAttribute('src', 'AdultoHomem.jpg')
      }else if(idade <60){
        img.setAttribute('src', 'SenhorHomem.jpg')
      }else if(idade <100){
        img.setAttribute('src', 'IdosoHomem.jpg')
      }else{
        img.setAttribute('src', 'MuitoIdosoHomem.jpg')
      }
    }
    else if(sexo[1].checked){ //verifica o gênero informado pelo usuário. Caso for 'MULHER' exec esse bloco.
      genero= 'MULHER'
      if(idade >= 0 && idade <2){
        img.setAttribute('src', 'RecemNascidoMulher.jpg')
      }else if(idade <5){
        img.setAttribute('src', 'BebeMulher.jpg')
      }else if(idade <12){
        img.setAttribute('src', 'CriançaMulher.jpg')
      }else if(idade <18){
        img.setAttribute('src', 'AdolescenteMulher.jpg')
      }else if(idade <30){
        img.setAttribute('src', 'JovemMulher.jpg')
      }else if(idade <40){
        img.setAttribute('src', 'AdultoMulher.jpg')
      }else if(idade <60){
        img.setAttribute('src', 'SenhoraMulher.jpg')
      }else if(idade <100){
        img.setAttribute('src', 'IdosoMulher.jpg')
      }else{
        img.setAttribute('src', 'MuitoIdosoMulher.jpg')
      }
    }
    resultado.innerHTML=`Detectamos ${genero} de ${idade} anos.` //imprime em tela o resultado com a img correspondente.
    resultado.appendChild(img)
  }
}