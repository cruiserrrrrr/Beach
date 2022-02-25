
// LOAD MORE BTN ---------------------------------------
document.getElementsByClassName("btn__bids")[0].onclick = () => {
            document.getElementById("bids__items").innerHTML += `
            				<div class="bids__item">
								<img class="item__picture" src="img/bids__item1.png" alt="">
								<div class="bids__item__info">
										<div class="nft__bids__info">
											<h3 class="bids__name">David Art</h3>
											<p class="bids__vaule">1.25 ETH</p>
										</div>
										<div class="bids__item__picture">
											<img src="img/bids__item__1.png" alt="">
										</div>
								</div>
							</div>

							<div class="bids__item">
								<img class="item__picture" src="img/bids__item2.png" alt="">
								<div class="bids__item__info">
										<div class="nft__bids__info">
											<h3 class="bids__name">David Art</h3>
											<p class="bids__vaule">1.25 ETH</p>
										</div>
										<div class="bids__item__picture">
											<img src="img/bids__item__2.png" alt="">
										</div>
								</div>
							</div>

							<div class="bids__item">
								<img class="item__picture" src="img/bids__item3.png" alt="">
								<div class="bids__item__info">
										<div class="nft__bids__info">
											<h3 class="bids__name">David Art</h3>
											<p class="bids__vaule">1.25 ETH</p>
										</div>
										<div class="bids__item__picture">
											<img src="img/bids__item__3.png" alt="">
										</div>
								</div>
							</div>

							<div class="bids__item">
								<img class="item__picture" src="img/bids__item4.png" alt="">
								<div class="bids__item__info">
										<div class="nft__bids__info">
											<h3 class="bids__name">David Art</h3>
											<p class="bids__vaule">1.25 ETH</p>
										</div>
										<div class="bids__item__picture">
											<img src="img/bids__item__4.png" alt="">
										</div>
								</div>
							</div>`;
            return false;
        };
// OPEN SEARCH -------------------------------------
	document.getElementById('search__icon').onclick = function() {
	document.getElementById('header').classList.add('header__none');	

	document.getElementById('mobile__search__act').classList.add('search__active__mob');
	}
	
	document.getElementById('header__search').onclick = function() {
	document.getElementById('header').classList.add('header__none');	
		
	document.getElementById('search').classList.add('search__active__mob');

	}
// CLOSE SEARCH --------------------------------------
	const btn_2 = document.getElementById('close__btn')
	btn_2.onclick = function() {

	document.getElementById('mobile__search__act').classList.remove("search__active__mob");
	document.getElementById('header').classList.remove("header__none");;
	}


	








































