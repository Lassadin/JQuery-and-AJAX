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
              `<article style="margin-right: 10px">
                <header>
                    <h4>${sarja.show.name}</h4>
                </header>
                <figure>
                <img src="${sarja.show.image.medium}" alt="No image found">
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
