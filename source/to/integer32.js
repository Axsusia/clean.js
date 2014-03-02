// 정수로 바꾼다! (32 bit!)
clean.to.integer32 = function(thing) {
	//REQUIRED: thing: 변경할 대상

	/*
	 js의 비트연산자는 기본적으로 32비트 signed int를 대상으로 합니다.
	 피연산자가 다른 형식일 경우 자동으로 해당 형식으로 변환한 뒤 연산
	 을 시도하구요.  이 과정이 단순히 parseInt를 사용하는지는 모르겠는
	 데, "0xff"같은 문자열도 16진수로 변환해서 처리를 해주더라구요. 스
	 펙문서를 제가 못 찾은건지 그건 확인을 못 해봤지만,  어쨌든 그래서
	 비트연산의 대상이 되면 소수점같은거 없는 깔끔한 정수가 됩니다.

	 또한, 반환값도 당연히 32비트 정수로 정해져 있기 때문에  null  NaN
	 undefined infinity 그런거 없이 무조건 0을 반환합니다.  예외도 발생
	 시키지 않구요.   이는 어떠한 값을 "반드시 정수일 것을 보장" 하기에
	 좋은 방법이라 은근히 많이 사용되는 잔스킬입니다.

	 같은 맥락에서 아래 것들도 같은 작용을 합니다.

	 ~~v	// bitwise NOT
	 v<<0	// bitwise shift
	 */
	return thing | 0;
};
