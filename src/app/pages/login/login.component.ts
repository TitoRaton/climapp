import { Component, inject } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import 'animate.css';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  isRegistrationView: boolean = false;
  isLoginView: boolean = false;

  usuarioRegistroObj: any = {
    userName: '',
    userEmail:'',
    password: ''
  }

  usuarioLoginObj: any = {
    userName: '',
    password: ''
  }

  router = inject(Router);

  registroCompletado(){
    Swal.fire({
      title: 'Registro completo.',
      text: 'El registro se ha completado.',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  }

  loginError(){
    Swal.fire({
      title: 'Datos no válidos.',
      text: 'Sus datos son inválidos.',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }

  usuarioNoEncontrado(){
    Swal.fire({
      title: 'Usuario no encontrado',
      text: 'Usted no se ha registrado en la web.',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }


  onRegister(){
    const isLocalData = localStorage.getItem("registroLocal");
    if (isLocalData != null){
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.usuarioRegistroObj);
      localStorage.setItem("registroLocal",JSON.stringify(localArray))
    }else {
      const localArray = [];
      localArray.push(this.usuarioRegistroObj);
      localStorage.setItem("registroLocal",JSON.stringify(localArray))
    }
    this.isRegistrationView = false;
    this.registroCompletado();
  }

  onLogin(){
    const isLocalData = localStorage.getItem("registroLocal");
    if (isLocalData != null){
      const usuarios = JSON.parse(isLocalData);
      const isUsuarioEncontrado = usuarios.find((m:any) => m.userName == this.usuarioLoginObj.userName && m.password == this.usuarioLoginObj.password)
      if (isUsuarioEncontrado != undefined){
        this.router.navigateByUrl('inicioCiudades')
      }else{
        this.loginError()
      }
    }else{
      this.usuarioNoEncontrado()
    }
  }

}
