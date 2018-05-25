jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    
    $("#rss-feeds").rss(
    
        //Change this to your own rss feeds
        "https://sagarshirbhate.blogspot.in/feeds/posts/default",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 10,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFastSynced',
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='item'>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
        
        }
    );
    
    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    GitHubCalendar("#github-graph", "kundan7kumar");
    
    
    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({
                        username: "kundan7kumar",
                        selector: "#ghfeed",
                        limit: 20
                        });


                       
                       var feed = new Instafeed({
                                                target: 'insta-images',
                                                clientId: '71dd854f34c1451297bde1629bcaada0',
                                                template: '<li id="insta"><a href="{{link}}"><img src="{{image}}" /></a></li>',
                                                accesstoken:'298103092.71dd854.ea198d549ddb4ab1918c457c36c294c2'
                                                });
                       
                       feed.run();
                       
//    var feed = new Instafeed({
//                                                target: 'insta-images',
//                                                get: 'user',
//                                                userId: 'sagarshirbhate',
//                                                clientId: '71dd854f34c1451297bde1629bcaada0',
//                                                accessToken: '298103092.71dd854.ea198d549ddb4ab1918c457c36c294c2',
//                                                limit: 4,
//                                                template: '<li id="insta"><a href="{{link}}"><img src="{{image}}" /></a></li>'
//                                                });
//    feed.run();
                       
});
