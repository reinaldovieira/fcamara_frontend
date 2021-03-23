import React from 'react';

export default function Home() {
  return (
    <div class="container">
      <div class="row" style={{ marginTop: '20px' }}>
        <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
          <form role="form">
            <fieldset>
              <h2>Por favor, entre!</h2>
              <hr class="colorgraph" />
              <div class="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="form-control input-lg"
                  placeholder="Endereço de E-mail"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="form-control input-lg"
                  placeholder="Senha"
                />
              </div>
              <span class="button-checkbox">
                <a href="" class="btn btn-link pull-right">
                  Esqueceu a senha?
                </a>
              </span>
              <hr class="colorgraph" />
              <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6">
                  <input
                    type="submit"
                    class="btn btn-lg btn-success btn-block"
                    value="Entrar"
                  />
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6">
                  <a href="" class="btn btn-lg btn-primary btn-block">
                    Registrar
                  </a>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
