class Theme {
    
    constructor(){
        this.pElement = document.querySelectorAll('#label');
        this.toggleBtn = document.querySelectorAll('.toggle-btn');
        this.body = document.querySelector('body');
    }

    changeTheme(){
        this.toggleBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.style.opacity= '1';
                this.applyTheme(btn.id);
                this.toggleBtn.forEach(item => {
                    if (item != btn){
                        item.style.opacity = '0';
                    }
                })
            })
        })

        this.pElement.forEach(p => {
            p.addEventListener('click', () => {
                const radioId = p.getAttribute('data-radio-id');
                this.applyTheme(radioId);
                this.toggleBtn.forEach(btn => {
                    btn.style.opacity = btn.id === radioId ? '1' : '0';
                })
            })
        })
    }

    applyTheme(themeId){
        this.body.classList.remove ('one','two','three');
        this.body.classList.add(themeId);
    }

}
