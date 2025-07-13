$(function(){
			// Ajax button click
			$('#adduser').on('click',function(){
				$.ajax({
					url:'./adduser.php',
					type:'POST',
					data:{
						'email':$('#email').val(),
						'password':$('#password').val()
					}
				})
				// Ajaxリクエストが成功した時発動
				.done( (data) => {
					$('#res').html(data);
					console.log(data);
				})
				
			});
		});