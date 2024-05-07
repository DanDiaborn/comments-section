alert(123);

// window.onload = () => {

//   alert(123)

//   const bodyElement = document.querySelector('body');
//   const answer = document.querySelector('#sf_consultation_comment_answer_description');
//   function removeHTMLTags(str) {
//     return str.replace(/<[^>]*>/g, '');
//   }

//   //QUILL

//   // const quill = new Quill('#ql-editor-wrapper', {
//   //   theme: 'snow',
//   // });

//   // quill.on('text-change', (delta, oldDelta, source) => {
//   //   const qlEditor = document.querySelector('.ql-editor');

//   //   formQuestionInputLength = removeHTMLTags(qlEditor.innerHTML).length;
//   //   answer.value = qlEditor.innerHTML;
//   //   if (formQuestionInputLength <= progressBarTime) {
//   //     progressBar.style.setProperty('--pseudo-element-width', `${formQuestionInputLength / progressBarTime * 100}%`);
//   //   }
//   //   else {
//   //     progressBar.style.setProperty('--pseudo-element-width', `100%`);
//   //   }
//   //   if (bodyElement.classList.contains('user-authenticated')) {
//   //     if (formQuestionInputLength >= progressBarTime) {
//   //       fullFormConfirmAuthBtn.classList.remove('full-form__confirm-btn-authenticated-unactive');
//   //       fullFormConfirmAuthBtn.classList.add('full-form__confirm-btn-authenticated-active');
//   //     }
//   //     else {
//   //       fullFormConfirmAuthBtn.classList.remove('full-form__confirm-btn-authenticated-active');
//   //       fullFormConfirmAuthBtn.classList.add('full-form__confirm-btn-authenticated-unactive');
//   //     }

//   //   }
//   //   else {
//   //     if (formQuestionInputLength >= progressBarTime) {
//   //       fullFormNextBtn.classList.remove('full-form__next-btn-unactive');
//   //       fullFormNextBtn.classList.add('full-form__next-btn-active');
//   //     }
//   //     else {
//   //       fullFormNextBtn.classList.remove('full-form__next-btn-active');
//   //       fullFormNextBtn.classList.add('full-form__next-btn-unactive');
//   //     }

//   //   }
//   // });

//   //CONTACT MENU

//   const commentMenuBtn = document.querySelectorAll('.comment__menu-btn');
//   const commentMenu = document.querySelector('.comment-menu');
//   const hideButton = document.querySelector('.comment-menu__hide-button');
//   const deleteButton = document.querySelector('.comment-menu__button-delete');
//   const editButton = document.querySelector('.comment-menu__button-edit');


//   commentMenuBtn.forEach((el, key) => {
//     el.onclick = () => {
//       if (deleteButton) {
//         deleteButton.setAttribute('data-id', el.getAttribute('data-id'));
//         editButton.setAttribute('href', `//cabinet.consjurist.ru/cabinet/comments/${el.getAttribute('data-id')}/edit`);
//       }
//       commentMenu.classList.toggle('comment-menu__hide');
//     }
//   })

//   hideButton.onclick = () => { commentMenu.classList.add('comment-menu__hide'); }


//   // document.addEventListener('click', (e) => {
//   //   console.log(activeMenuKey)
//   //   if (activeMenuKey !== null) {
//   //     const elementsToExclude = [...commentMenu, ...commentMenuBtn];

//   //     const isClickInsideExcludedElements = elementsToExclude.some(element => element.contains(e.target));

//   //     console.log(isClickInsideExcludedElements);
//   //     if (!isClickInsideExcludedElements) {
//   //       commentMenu[activeMenuKey].classList.add('comment-menu__hide');
//   //     }
//   //   }
//   // })

//   //INPUT SIZE


//   // textarea.style.height = textarea.scrollHeight + "px";
//   // textarea.addEventListener("input", function () {
//   //   this.style.height = "auto";
//   //   this.style.height = this.scrollHeight + "px";
//   // });

//   //NEW COMMENT
//   const fullForm = document.querySelector('.comments__full-form');
//   const activeForm = document.querySelectorAll('.comments__form');
//   const fullFormNextBtn = document.querySelector('.full-form__next-btn');
//   const fullFormBackBtn = document.querySelector('.full-form__back-btn');
//   const fullFormConfirmBtn = document.querySelector('.full-form__confirm-btn');
//   const fullFormConfirmAuthBtn = document.querySelector('.full-form__confirm-btn-authenticated');
//   const formFirstScreen = document.querySelector('.full-form__first-screen');
//   const formSecondScreen = document.querySelector('.full-form__second-screen');
//   const formQuestionInput = document.querySelector('.full-form__question-input');
//   const progressBar = document.querySelector('.full-form__progress');
//   const formName = document.querySelector('.full-form__name');
//   const formEmail = document.querySelector('.full-form__email');
//   const hiddenAnsverId = document.querySelector('#hidden_answer_id');
//   const consultationCommentAnswerToAnswerId = document.querySelector('#sf_consultation_comment_answer_to_answer_id');
//   const textareaFake = document.querySelector('.comments__textarea-fake');
//   const newAnsverButton = document.querySelectorAll('.comment__ansv');


//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   let formQuestionInputLength = 0;
//   let formValidation = { name: false, email: false };
//   const progressBarTime = 10;

//   //reset form before opening new
//   const resetForm = (activeFake) => {
//     // simplemde.value('');
//     // textarea.value = '';
//     // textarea.style.height = textarea.scrollHeight + "px";
//     if (!(activeFake.parentNode.getAttribute('data-id') === textareaFake.parentNode.getAttribute('data-id'))) {
//       textareaFake.classList.remove('hide');
//       textareaFake.disabled = false;
//     }
//     newAnsverButton.forEach((element) => {
//       if (!(activeFake.parentNode.getAttribute('data-id') === element.parentNode.getAttribute('data-id'))) {
//         element.classList.remove('hide');
//       }
//     });
//     activeForm.forEach((element) => {
//       element.reset();
//     })
//     progressBar.style.setProperty('--pseudo-element-width', 0);
//     formFirstScreen.classList.remove('hide');
//     formSecondScreen.classList.add('hide');
//     formValidation = { name: false, email: false };
//   }

//   //setting new form
//   const setForm = (el, isFocused) => {
//     resetForm(el);
//     // if (el.classList.contains('comments__textarea-fake')) consultationCommentAnswerToAnswerId.disabled = true;
//     if (bodyElement.classList.contains('user-authenticated')) {
//       if (el.parentNode.getAttribute('data-id') !== null) {
//         hiddenAnsverId.setAttribute('value', el.parentNode.getAttribute('data-id'));
//         consultationCommentAnswerToAnswerId.setAttribute('value', el.parentNode.getAttribute('data-id'));
//       }
//       el.classList.add('hide');
//       el.disabled = true;
//       el.insertAdjacentElement('afterend', fullForm);
//       fullForm.classList.remove('hide');
//       fullFormConfirmAuthBtn.classList.remove('hide');
//       if (isFocused === true) formQuestionInput.focus();
//       formName.disabled = true;
//       formEmail.disabled = true;
//       fullFormNextBtn.classList.add('hide');
//     }
//     else {
//       if (el.parentNode.getAttribute('data-id') !== null) {
//         hiddenAnsverId.setAttribute('value', el.parentNode.getAttribute('data-id'));
//         consultationCommentAnswerToAnswerId.setAttribute('value', el.parentNode.getAttribute('data-id'));
//       }
//       el.classList.add('hide');
//       el.disabled = true;
//       el.insertAdjacentElement('afterend', fullForm);
//       fullForm.classList.remove('hide');
//       if (isFocused === true) formQuestionInput.focus();
//     }
//   }

//   setForm(textareaFake, false);

//   textareaFake.onclick = () => {
//     setForm(textareaFake, true);
//   }

//   newAnsverButton.forEach((el) => {
//     el.onclick = () => {
//       setForm(el, true);
//     }
//   })

//   //progress bar and buttons visuals
//   // formQuestionInput.addEventListener("input", (event) => {
//   //   formQuestionInputLength = event.target.value.length;
//   //   if (formQuestionInputLength <= progressBarTime) {
//   //     progressBar.style.setProperty('--pseudo-element-width', `${formQuestionInputLength / progressBarTime * 100}%`);
//   //   }
//   //   else {
//   //     progressBar.style.setProperty('--pseudo-element-width', `100%`);
//   //   }
//   //   if (bodyElement.classList.contains('user-authenticated')) {
//   //     if (formQuestionInputLength >= progressBarTime) {
//   //       fullFormConfirmAuthBtn.classList.remove('full-form__confirm-btn-authenticated-unactive');
//   //       fullFormConfirmAuthBtn.classList.add('full-form__confirm-btn-authenticated-active');
//   //     }
//   //     else {
//   //       fullFormConfirmAuthBtn.classList.remove('full-form__confirm-btn-authenticated-active');
//   //       fullFormConfirmAuthBtn.classList.add('full-form__confirm-btn-authenticated-unactive');
//   //     }

//   //   }
//   //   else {
//   //     if (formQuestionInputLength >= progressBarTime) {
//   //       fullFormNextBtn.classList.remove('full-form__next-btn-unactive');
//   //       fullFormNextBtn.classList.add('full-form__next-btn-active');
//   //     }
//   //     else {
//   //       fullFormNextBtn.classList.remove('full-form__next-btn-active');
//   //       fullFormNextBtn.classList.add('full-form__next-btn-unactive');
//   //     }

//   //   }
//   // });

//   //button next
//   fullFormNextBtn.onclick = (event) => {
//     event.preventDefault();
//     if (formQuestionInputLength >= progressBarTime) {
//       formFirstScreen.classList.add('hide');
//       formSecondScreen.classList.remove('hide');
//     }
//   }
//   //button back
//   fullFormBackBtn.onclick = (event) => {
//     event.preventDefault();
//     formFirstScreen.classList.remove('hide');
//     formSecondScreen.classList.add('hide');
//   }

//   //form email validation
//   formEmail.addEventListener("input", (event) => {
//     if (emailRegex.test(formEmail.value.trim())) {
//       formValidation.email = true;
//     }
//     else {
//       formValidation.email = false;
//     }
//     if (formValidation.name === true && formValidation.email === true) {
//       fullFormConfirmBtn.classList.remove('full-form__confirm-btn-unactive');
//       fullFormConfirmBtn.classList.add('full-form__confirm-btn-active');
//     }
//     else {
//       fullFormConfirmBtn.classList.add('full-form__confirm-btn-unactive');
//       fullFormConfirmBtn.classList.remove('full-form__confirm-btn-active');
//     }
//   });

//   //form name validation
//   formName.addEventListener("input", (event) => {
//     if (formName.value.trim().length > 0) {
//       formValidation.name = true;
//     }
//     else {
//       formValidation.name = false;
//     }
//     if (formValidation.name === true && formValidation.email === true) {
//       fullFormConfirmBtn.classList.remove('full-form__confirm-btn-unactive');
//       fullFormConfirmBtn.classList.add('full-form__confirm-btn-active');
//     }
//     else {
//       fullFormConfirmBtn.classList.add('full-form__confirm-btn-unactive');
//       fullFormConfirmBtn.classList.remove('full-form__confirm-btn-active');
//     }
//   });

//   //submit form
//   fullFormConfirmBtn.onclick = (event) => {
//     event.preventDefault();
//     if (fullFormConfirmBtn.classList.contains('full-form__confirm-btn-active')) {
//       fullFormConfirmBtn.closest('.comments__form').submit();
//       fullFormConfirmBtn.closest('.comments__form').reset();
//       setForm(textareaFake, false);
//     }
//   }

//   fullFormConfirmAuthBtn.onclick = (event) => {
//     event.preventDefault();
//     if (fullFormConfirmAuthBtn.classList.contains('full-form__confirm-btn-authenticated-active')) {
//       fullFormConfirmAuthBtn.closest('.comments__form').submit();
//       fullFormConfirmAuthBtn.closest('.comments__form').reset();
//       setForm(textareaFake, false);
//     }
//   }


// };