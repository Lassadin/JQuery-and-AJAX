$(function() {
  // skripti tänne
  const apiUrl = 'http://api.tvmaze.com/search/shows?';

  const haku = function(osoite, takaisinkutsu) {
    $.getJSON(osoite, takaisinkutsu);
  };

  const naytaTulos = function(tulos) {
    console.log(tulos);
    const kohde = $('#list');
    kohde.empty();
    $.each(tulos, function(indeksi, sarja) {
          console.log('nimi', sarja.show.name);
          if (sarja.show.image === null) {
            sarja.show.image = {
              medium: 'http://placekitten.com/210/295',
            };
          }
          const ohjelma = $(
              `<article>
                <header>
                    <h1>${sarja.show.name}</h1>
                </header>
                <figure>
                <img src="${sarja.show.image.medium}">
                </figure>
                <p></p>
            </article>`,
          );
          kohde.append(ohjelma);
        },
    );
  };

  const lomake = $('form');
  lomake.submit(function(evt) {
    evt.preventDefault();
    const querystring = lomake.serialize();
    haku(apiUrl + querystring, naytaTulos);
  });

});
