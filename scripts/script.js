const btnLoginFinal = document.getElementById("btnLoginFinal");
if (btnLoginFinal) {
    btnLoginFinal.onclick = (e) => {
        e.preventDefault();
        
        setTimeout(() => {
            window.location.href = "login.html";
        }, 500);
    };
}

document.getElementById("form-login").onsubmit = (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");
    let titulo = document.getElementById("titulo");
    let botao = document.getElementById("botao-envio");

    mensagem.innerHTML = "";

   
    if (!email.includes("@") || !email.includes(".")) {
        mensagem.innerHTML = '<div class="error"><p>Email Inválido!</p></div>';
        return;
    }

    
    if (senha.length < 4) {
        mensagem.innerHTML = '<div class="error"><p>Senha muito curta!</p></div>';
        return;
    }

    
    let isCadastro = titulo.innerText.toLowerCase() === "cadastro";

    if (isCadastro) {
        
        if (localStorage.getItem(email)) {
            mensagem.innerHTML = '<div class="error"><p>Email já cadastrado!</p></div>';
            return;
        }
        
        localStorage.setItem(email, senha);
        mensagem.innerHTML = '<div class="sucesso"><p>Cadastrado com sucesso!</p></div>';
        
        
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000);
        
    } else {
       
        let salva = localStorage.getItem(email);
        if (salva === senha) {
            mensagem.innerHTML = '<div class="sucesso"><p>Login com sucesso!</p></div>';
            
            setTimeout(() => {
                window.location.href = "home.html";
            }, 500);
        } else {
            mensagem.innerHTML = '<div class="error"><p>Email ou senha incorretos!</p></div>';
        }
    }

    document.getElementById("form-login").reset();
};


const toggle = document.getElementById("toggle");
const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao-envio");

toggle.addEventListener("click", () => {
    if (titulo.innerText === "login") {
        titulo.innerText = "cadastro";
        botao.innerText = "Cadastrar";
        toggle.innerHTML = '<p>Já tem conta? <u> Faça login!</u></p>';
    } else {
        titulo.innerText = "login";
        botao.innerText = "Entrar";
        toggle.innerHTML = '<p>Não tem conta? <u> Cadastre-se!</u></p>';
    }
});

