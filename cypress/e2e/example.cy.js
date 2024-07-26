describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('/') // Altere para a URL do seu formulário de login
  })

  it('should display the login form', () => {
    cy.get('img.diuwahiuwafiuwa').should('be.visible')
    cy.get('form.fpwakfpowafpowjnaofwa').should('be.visible')
    cy.get('input#email').should('be.visible')
    cy.get('input#senha').should('be.visible')
    cy.get('button[type=submit]').should('contain', 'Entrar')
    cy.get('a').contains('Esqueci minha senha').should('be.visible')
    cy.get('a').contains('Criar Conta').should('be.visible')
  })

  // it('should not submit the form with empty fields', () => {
  //   cy.get('button[type=submit]').click()
  //   cy.get('input#email:invalid').should('exist')
  //   cy.get('input#senha:invalid').should('exist')
  // })

  // it('should show error message on invalid credentials', () => {
  //   cy.get('input#email').type('invalidemail@example.com')
  //   cy.get('input#senha').type('invalidpassword')
  //   cy.get('button[type=submit]').click()

  //   // Suponha que sua aplicação mostre uma mensagem de erro em algum lugar
  //   cy.contains('Invalid email or password').should('be.visible')
  // })

  it('should navigate to the home page on successful login', () => {
    cy.intercept('POST', '/login', {
      statusCode: 200,
      body: {
        token: 'fakeToken',
        user: { name: 'Test User' }
      }
    }).as('loginRequest')

    cy.get('input#email').type('validemail@example.com')
    cy.get('input#senha').type('validpassword')
    cy.get('button[type=submit]').click()

    cy.wait('@loginRequest')
    cy.url().should('include', '/') // Altere para a URL esperada após o login bem-sucedido
  })

  it('should display loading state during form submission', () => {
    cy.intercept('POST', '/login', (req) => {
      req.reply((res) => {
        res.send({ delay: 1000, body: { token: 'fakeToken', user: { name: 'Test User' } } })
      })
    }).as('loginRequestWithDelay')

    cy.get('input#email').type('validemail@example.com')
    cy.get('input#senha').type('validpassword')
    cy.get('button[type=submit]').click()

    cy.get('button[type=submit]').should('contain', 'Loading') // Altere para o texto do estado de carregamento, se houver

    cy.wait('@loginRequestWithDelay')
    cy.url().should('include', '/home') // Altere para a URL esperada após o login bem-sucedido
  })
})
