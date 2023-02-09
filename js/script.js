document.addEventListener('DOMContentLoaded', function() {
  // бургер-меню
  function burger() {
    const burger = document?.querySelector('[data-burger]');
    const menu = document?.querySelector('[data-menu]');
    const menuItems = document?.querySelectorAll('[data-menu-item]');
    const overlay = document?.querySelector('[data-menu-overlay]');

    burger?.addEventListener('click', (e) => {
      burger?.classList.toggle('burger--active');
      menu?.classList.toggle('menu--active');
      overlay?.classList.toggle('is-active');

      if (menu?.classList.contains('menu--active')) {
        burger?.setAttribute('aria-expanded', 'true');
        burger?.setAttribute('aria-label', 'Закрыть меню');
        disableScroll();
      } else {
        burger?.setAttribute('aria-expanded', 'false');
        burger?.setAttribute('aria-label', 'Открыть меню');
        enableScroll();
      }
    });

    overlay?.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      overlay?.classList.remove('is-active');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      enableScroll();
    });

    menuItems?.forEach(el => {
      el.addEventListener('click', () => {
        burger?.setAttribute('aria-expanded', 'false');
        burger?.setAttribute('aria-label', 'Открыть меню');
        overlay?.classList.remove('is-active');
        burger.classList.remove('burger--active');
        menu.classList.remove('menu--active');
        enableScroll();
      });
    });
  }

  burger();



  // input

  // function input() {
  //   let inputBtn = document.querySelector('.header-top__search-mobile');
  //   let inputSearch = document.querySelector('.header-top__search');
  //   const overlay = document?.querySelector('[data-menu-overlay]');
    
  //   inputBtn.addEventListener('click', () => {
  //     inputBtn.classList.add('is-hidden');
  //     inputSearch.classList.add('is-active');
  //     overlay?.classList.add('is-active');
  //   })

  //   overlay?.addEventListener('click', () => {
  //     inputBtn.classList.remove('is-hidden');
  //     inputSearch.classList.remove('is-active');
  //     overlay.classList.remove('is-active');
  //   });
  // }

  // input();

  // открытие каналов
  function openChannel() {
    const headerChannel = document.querySelector('#header-channel');
    const modalChannel = document.querySelector('.modal-channel');
    const overlay = document.querySelector('[data-overlay]');

    headerChannel.addEventListener('click', () => {
      headerChannel.classList.toggle('is-active');
      modalChannel.classList.toggle('is-active')
      overlay.classList.toggle('modal-active');
    })

    overlay.addEventListener('click', () => {
      headerChannel.classList.remove('is-active');
      modalChannel.classList.remove('is-active')
      overlay.classList.remove('modal-active');
    });
  }

  openChannel()

  // редактор текста

  const editorBtn = document.querySelector('.content-editor__btn');
  const editor = document.querySelector('.content-editor')
  const editorCloseBtn = document.querySelector('.content-editor__close');
  const editorInput = document.querySelector('.content-editor__edit-block');

  editorBtn.addEventListener('click', function() {
    editor.classList.add('is-active');
    editorBtn.classList.add('is-active');
    editorCloseBtn.addEventListener('click', () => {
      editor.classList.remove('is-active');
      editorBtn.classList.remove('is-active')
    })
    editorInput.addEventListener('click', () => {
      document.querySelector('.content-editor__placeholder').style.display = "none";
    })
  })
  editor.addEventListener('click', function() {
    editor.classList.add('is-active');
  })




})