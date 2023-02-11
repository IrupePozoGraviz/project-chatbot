(function() {
 const messages = JSON.parse("{\"BEOlwg\":\"Välj sidor\",\"+84A+g\":\"Antal\",\"mxOaQA\":\"Kan titta\",\"9uVN4A\":\"Du måste välja minst en sida för att ladda ned din design.\",\"2BKVwg\":\"Länkdelning är begränsad\",\"oLDrRA\":\"Länkar som delas offentligt är tillgängliga för alla som tar emot dem.\",\"anuQlg\":\"Bara du kan komma åt\",\"BZ+nag\":\"Ladda ned sidor som separata filer\",\"IEsWfA\":\"Eller <a tabindex=\\\"0\\\" data-anchor-id=\\\"download_watermarked_draft\\\" role=\\\"menuitem\\\">ladda ned ett kostnadsfritt utkast med vattenstämpel</a>\",\"2dxvBQ\":\"{0} rabatt på frakt\",\"nifqhQ\":\"1080p (HD)\",\"kXS8Qw\":\"Inkludera anteckningar\",\"kiPCsw\":\"{0} rabatt på utskrifter\",\"aGOZQQ\":\"GIF måste vara 60 sekunder eller mindre för att ladda ned. Prova att ladda ned en MP4 istället eller uppgradera till {0} för att ladda ned upp till 120 sekunder långa GIF-filer.\",\"Bzshhg\":\"Kopiera länken\",\"HmWP/w\":\"Du har precis kopierat en länk som <strong>bara du kan komma åt</strong>. Om du använder den här länken för att dela med andra personer, se till att lägga till dem i designen eller <strong><a data-anchor-id=\\\"change_access\\\">ändra åtkomst så att alla med länken kan redigera.</a></strong>\",\"LLA79A\":\"Personer i {0} som har länken har åtkomst till den här designen.\",\"cwMvfw\":\"Du har inte behörighet att dela den här designen.\",\"usaTvw\":\"Läs mer\",\"ngcuSg\":\"Personer i din klass som har länken har åtkomst till den här designen.\",\"3nrglA\":\"MP4 måste vara 3 timmar eller mindre för att ladda ned. Du kan dela den här designen i Canva så att andra kan se den.\",\"TDUT4Q\":\"För streaming\",\"p1YnVw\":\"Ladda ned ett utkast\",\"ZFChXQ\":\"Utvalda sidor\",\"N65KxA\":\"Publicera som mall\",\"R0iZwA\":\"Kan redigera\",\"xrGcJg\":\"Vänta medan vi bearbetar en video i din design. Bearbetningstiden kan variera beroende på din videos storlek.\",\"qiZa4A\":\"Anteckningar inkluderade i din nedladdning visas under sidans miniatyr\",\"kSGlhw\":\"För stora skärmar\",\"sxtb9A\":\"Vem som helst med länken kan nu redigera denna design\",\"ZwLU9Q\":\"Prenumerera och ladda ned\",\"epBxrQ\":\"Kopierad\",\"IvHFnQ\":\"{0, number} % rabatt på utskrift\",\"183K+Q\":\"Länken delas med teamet\",\"WhTG/A\":\"4K (UHD)\",\"CiPyfA\":\"Personer i din skola som har länken har åtkomst till den här designen.\",\"7cviTg\":\"Ser ut som du har länkar i din design. För att länkar ska fungera väljer du PDF.\",\"HDOLXQ\":\"tum\",\"QxDj2Q\":\"Personer i ditt team som har länken har åtkomst till den här designen.\",\"3Dw7/A\":\"Original\",\"YApcpQ\":\"GIF måste vara 120 sekunder eller mindre för att ladda ned. Du kan dela den här GIF-filen i Canva så att andra kan se den.\",\"Alo3Dw\":\"{0} rabatt på utskrift\",\"2fOtng\":\"<a tabindex=\\\"0\\\" data-anchor-id=\\\"download_watermarked_draft\\\" role=\\\"menuitem\\\">Ladda ned ett kostnadsfritt utkast med vattenstämpel</a>\",\"03Ru/g\":\"Länken delas offentligt\",\"Qd51FQ\":\"Vi kunde inte skapa en länk. Försök igen.\",\"rFrhbw\":\"Ladda ned kommer att vara tillgängligt när processen är slutförd.\",\"8+pMXA\":\"cm\",\"wPKYZQ\":\"Endast din klass\",\"N+1dpQ\":\"Spara nedladdningsinställningar\",\"1rdlVA\":\"Den här designen blir allmänt tillgänglig. Alla som har länken har åtkomst till den.\",\"249uig\":\"Kan kommentera\",\"sqD5VA\":\"PDF stöder inte ljud, video eller animationer. Överväg att ladda ner en MP4-video eller <a data-anchor-id=\\\"share_link\\\">dela en länk</a> istället.\",\"3TeVqg\":\"Beskärningsmärken och utfall\",\"5lzReA\":\"Videor, ljud och animationer spelas inte upp när de exporteras som den här filtypen.\",\"v3B76A\":\"Platta ut PDF\",\"AC9VnA\":\"Ladda ned\",\"58H6Aw\":\"Inkludera beskärningsmarkering och utfall om du trimmar den här designen efter utskrift\",\"ylv8UA\":\"Endast tillagda personer\",\"4xsBHw\":\"Se upp: Whiteboard-sidor undantas från nedladdning eftersom de inte kan exporteras som PowerPoint, MP4-video eller GIF.\",\"sq+OpA\":\"Din design är tom. Lägg till några element innan du försöker att ladda ned den.\",\"285ksw\":\"{0} ({1} x {2}{3})\",\"BkNrcQ\":\"720p\",\"cQxxNQ\":\"För sociala medier\",\"TUdt4Q\":\"Länk delad med klassen\",\"JB6xOA\":\"Betala och ladda ned\",\"sYSEcQ\":\"Samarbetslänk\",\"hC+ykg\":\"Produktstorlek\",\"lJNe6g\":\"För utkast\",\"AsYPlw\":\"Whiteboard-sidor undantas från nedladdning eftersom de inte kan exporteras som PowerPoint. Prova att använda en annan filtyp som PNG eller PDF för att ladda ner whiteboard-sidor.\",\"0LA6LA\":\"Att plana ut din PDF kan hjälpa till att säkerställa att den skrivs ut korrekt\",\"VhFV2Q\":\"Länkbehörigheter\",\"zRp8pQ\":\"Endast personer som lagts till i den här designen har åtkomst till den.\",\"ZJm7pQ\":\"480p\",\"E/ujZw\":\"Bara ditt team\",\"iclREQ\":\"Den här designen blir allmänt tillgänglig. Alla som har länken har åtkomst till den, <b>ingen inloggning krävs</b>\",\"n6jQ2g\":\"Denna design kommer att vara allmänt tillgänglig. Alla med länken kan använda den som en mall.\",\"pMe95Q\":\"Endast du eller personer som lagts till i den här designen har åtkomst till den.\",\"IHfSww\":\"Kan visa\",\"1q2U2g\":\"Länk delad med skolan\",\"JP9yvQ\":\"Endast personer som har lagts till har åtkomst\",\"NtjipA\":\"{0, number} % rabatt på utskrifter\",\"rQeK+w\":\"Endast {0}\",\"VppDGw\":\"Endast personer som lagts till kan komma åt denna design med länken.\",\"+kBOuA\":\"Filtyp\",\"XHQVcA\":\"Har åtkomst\",\"qUjQfg\":\"Om du ökar bildstorleken kan din design ta längre än vanligt att ladda ned.\",\"lsxdiQ\":\"Endast din skola\",\"wtVDVw\":\"MP4 måste vara 30 minuter eller mindre för att ladda ned. Prova att dela den här designen eller uppgradera till {0} för att ladda ned upp till 3 timmar långa MP4.\",\"m6/OpA\":\"Alla som har länken\",\"Hkh/RA\":\"Vi stöder endast upp till {0, number, integer} sidor åt gången. Vi arbetar hårt med att ta bort begränsningen.\",\"mpXiPA\":\"Länkändringar uppdaterade\",\"n//Z5Q\":\"Du har valt fler sidor än vad som stöds för närvarande. Uppdatera ditt val, annars går vi vidare med enbart de första {0, number, integer} sidorna.\",\"vfWofQ\":\"{0, number} % rabatt på frakt\",\"iTYnmg\":\"Videor, ljud och animationer spelas inte upp när de exporteras som den här filtypen. Försök ladda ner den som en video (MP4).\"}");
 const cmsg = window["cmsg"] = window["cmsg"] || {};
 const strings = cmsg["strings"] = cmsg["strings"] || {};
 strings["sv-SE"] = strings["sv-SE"] ? Object.assign(strings["sv-SE"], messages) : messages;
})();