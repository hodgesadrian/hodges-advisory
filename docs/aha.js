(function($){

	$(document).ready(
		function(){
			$('#contact-1').hide();
			$('#site-nav-1 > div > div > .group li.contact a ').click(
				function(){
					$('.sc#contact-1').toggle();
					return false;
				}
			);
			$('#contact-1').css(
				{
					'cursor' : 'pointer'
				}
			).click(
				function(){
					$(this).hide();
				}
			).find('a').click(
				function(event){
					event.stopPropagation();
				}
			);
			$('.sc.d2').each(function(){
				$(this).find('.sc.d3').slice(1).hide();
			});			
			$('.sc#additional-expertise-1').show();
			$('.group.nav.d2').each(function(){
				$(this).find('li').eq(0).addClass('selected');			
			});
			$('.group.nav.d2 li').click(function(){
				var index = $(this).index();
				$(this).parents('.sc.d2').find('.sc.d3').not('#additional-expertise-1').hide().eq(index).show();
				$(this).addClass('selected').siblings().removeClass('selected');	
				measure();	
				return false;
			});
			$('.sc.d1 > div > div:not(.i7)').each(
				function(){
					if($(this).width() >= 310){					
						var fHeight = $('.sc.d1 .group.footer.d1 ').innerHeight();
						var wHeight = $(window).height() - fHeight;
						var thisHeight = $(this).innerHeight();
						var thisPadding = thisHeight - $(this).height();
						if(wHeight > thisHeight){							
							$(this).css(
								{
									'min-height' : wHeight - thisPadding,
									'height' : 'auto'
								}
							)
						}
					}
				}
			);
			(function(){
				var heights = [];
				var shortest = -1;
				
				
				$('#know-how-1 > div > div:gt(0)').each(
					function(){
						heights.push($(this).height());
					
					}				
				);
			
			})();
			$(window).scroll(
				function(){
					if($(document).scrollTop() > ($(window).height() -100)){
							$('.sc.d1 > div > .i1').addClass('f');
					}
					else {
							$('.sc.d1 > div > .i1').removeClass('f');

					}							
				}
			);
			var sections = ['home','about','people','expertise','services','work'];
			var active = 0;
			measure();
			$('#site-nav-1 .group.controls.iterative.d2 .previous a').click(function(){
				if(active > 0){
					location.href = '#' + sections[active-1] + '-1';
				}
				return false;
			});
			$('#site-nav-1 .group.controls.iterative.d2 .next a').click(function(){
				if(active < (sections.length-1)){
					location.href = '#' + sections[active+1] + '-1';
				}
				return false;
			});
			function measure(){
				
				var heights = [0];
				var current = -1;
				$('.sc.d1 > div > div:not(.i7)').each(
					function(){
						heights.push($(this).innerHeight());
					}
				);				
				$(window).scroll(select);
				function select(){
					var scrollTop = $(document).scrollTop();
					var sectionYPos = 0;
					for(var i=0; i<heights.length; i++){
						sectionYPos += heights[i];
						var nextSectionYPos = sectionYPos + heights[i+1];
						if((scrollTop +100 > sectionYPos) && (scrollTop +100 < nextSectionYPos)){
							$('#site-nav-1 .group.links.d2 li').removeClass('active');
							$('#site-nav-1 .group.links.d2 li').eq(i-1).addClass('active');
							active = i;
							break;
						}
					}
				}
			}
		}
	);


})(jQuery)