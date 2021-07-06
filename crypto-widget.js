$(document).ready(function () {
   
   //crypto widget basic 
   if($('body').find('.crypto-widget-basic').length > 0){
        
       var symbols = $('.crypto-widget-basic').data('id');
       var currency = $('.crypto-widget-basic').data('currency');
       window.setTimeout(function () {
           $.ajax({
               url: 'https://api.coingecko.com/api/v3/coins/markets',
               method: "post",
               type:"json",
               data: {
                   'vs_currency': currency,
                   'ids': symbols,
                   'price_change_percentage': '1h,24h,7d,14d, 30d, 200d,1y',
                   'order': 'market_cap_desc',
               },
               success: function (data) {
                   var widget = '';
                   $.each(data, function (i, val) {
                       console.log(val);
                       widget += '<div class="col-md-4 border"><div class="">' + val.name + '</div>';
                       widget += '<div class="row">';
                       widget += '<div class="col-md-4"><img class="img-thumbnail" src="' + val.image + '"></div>';
                       widget += '<div class="col-md-8"><b>Symbol</b> : <p>' + val.symbol + '</p>';
                       widget += '<p ><b>Price</b> : <span class="' + currency + '"></span>' + val.current_price + '</p>';
                       widget += '<p ><b>High 24h</b> : <span class=""></span>' + val.high_24h + '</p>';
                       widget += '<p ><b>Low 24h</b> : <span class=""></span>' + val.low_24h + '</p>';
                       widget += '<p ><small>Last Updated</small> : <span class=""></span>' + val.last_updated + '</p>';
                       widget += '</div>';
                       widget += '</div>';
                       widget += '</div>';
                       $('body').find('.crypto-widget-basic').append(widget);
                       widget = '';
                   });
                  
               }
           });
       },3000);

    }


//datatable
    
    var table = $('#crypto-table-basic').DataTable( {
        responsive: true
    } );






});
