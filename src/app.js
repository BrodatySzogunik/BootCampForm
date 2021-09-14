let question = '{"text":"Jaka jest stolica Czech?","answers":["Praga","Berlin","Paryż"],"rightAnswer":"Praga"}';
let form = document.createElement("form");
let btn = document.createElement("button");
let body = document.querySelector("body");

btn.innerText = "Sprawdź";

/**
 * Zadanie 1 - JSON ze zmiennej question ma być tablicą zawierającą w sumie 10 pytań
 * JSON musi być dodany jako osobny plik i zaimportowany tutaj
 * Pytania mają być z jednokrotną prawidłową (radio btn) odpowiedzią lub z wielokrotną (checkbox)
 * Jedno pytanie ma być też otwarte - input type text.
 * Poniżej iterować po całej tablicy wszystkich pytań
 */

/**
 * Zadanie 2 - Tworzenie formualrza przenieść do osobnego modułu np. FormBuilder.js
 * Tutaj tylko zaimportowac odpowiednią metodą i ją wywołać. Metoda ta powinna zwrócić elementy 'container'
 * które zostaną przypisane tutaj do body.
 */

question = JSON.parse(question);

let container = document.createElement("div");
let title = document.createElement("h3");
let answerInfo = document.createElement("p");

title.innerText = question.text;

container.appendChild(title);

question.answers.forEach((answer) => {
  let radioLabel = document.createElement("label");
  let radioInput = document.createElement("input");

  radioLabel.innerText = answer;

  radioInput.setAttribute("type", "radio");
  radioInput.setAttribute("name", "question-1");
  radioInput.setAttribute("value", answer);

  radioLabel.appendChild(radioInput);
  container.appendChild(radioLabel);
});

container.appendChild(answerInfo);
form.appendChild(container);
form.appendChild(btn);
body.appendChild(form);

/**
 * Zadanie 3 - Poniżej callback z addEventListener wydzielić jako osobna metoda
 * do osobnego modułu - plik o nazwie formChecker.js
 * i tutaj odpowiednio zaimportowany i użyty
 * Dostosować tę metodę do tablicy pytań, a nie jak obecnie pojedynczego obiektu pytania.
 * TIP - należy zastosować ID dla container i po nim odnosić się po querySelector aby znaleźć odpowiednie pytania i jego elemnty np. "answerInfo"
 */
btn.addEventListener("click", (event) => {
  event.preventDefault();
  let question1 = document.querySelectorAll("[name=question-1]");
  let value = "";

  question1.forEach((el) => {
    if(el.checked) value = el.value;
  });

  /**
   * Zadanie 4 - Powyżej gdy odpowiedź będzie prawidłowa "Dobrze" - nadać zielony kolor odpowiezi
   * Gdy "Źle" - czerwony
   */
  document.querySelector("p").innerText = value === question.rightAnswer ? "Dobrze" : "Źle";

  /**
   * Zadanie 5 - Dodać punktację do pytań, na koniec podać sumę prawidłowych, złych oraz wszystkich odpowiedzi.
   * Np.: 6/10 Dobrze, 4/10 Źle
   */

  /**
   * Zadanie 6 - Jeśli użytkownik uzyska wynik powwyżej 6 pkt na 10 to wyświetlić tekst, oznajmiający, że
   * "TEST ZOSTAŁ ZALICZONY"
   */

});

/**
 * Zadanie 7 - Dodać nowy button po rozwiązaniu testu z pytaniem:
 * "Czy chcesz wykonać test ponownie?"
 * Jeśli user kliknie button "TAK", to wtedy odpowiedzi powinny się wyczyścić a całość powinna wrócić do stanu początkowego.
 */

/**
 * Zadanie 8 - Dodać odpowiednie klasy do elementów HTML i dodać kod CSS i odpowiednio (ładnie) sformatować
 * Pytania testu i odpowiedzi.
 * Test powinien być wyśrodkowany,
 * odpowiedzi wyświetlane jedna pod drugą (nie obok siebie jak teraz)
 * Nadać ładny styl buttonowi.
 * Wyśrodkowac button.
 */

/**
 * Zadanie 9 - Tu wstępnie zmienimy metodę pracy z generowania kodu HTML nie z JS, a po prostu kod będzie plikiem HTML (pokażę podczas szkolenia, nie róbice tego proszę wcześniej).
 * Dodać walidację HTML 5 do formularza zgodnie z tym:
 * https://dev-bay.com/front-end-basics-3-html5-form-validation/
 * Każde pole jest wymagane
 * Pole tekstowe input type=text musi mieć max długość na 30 znaków a minimalną 1
 * Gdy jakieś pole pozostanie bez wprowadzonych danych wyświetlić komunikat na dole formularza "Wypełnij wszystkie pytania"
 * 
 */
