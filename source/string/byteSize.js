/** 
 * ���ڿ��� ����Ʈ ����� ���մϴ�
 * �ʿ� ������ ����� �˴ϴ�.. -_��
 * @author Axsusia
 * @param str üũ��� ����
 */
clean.string.byteSize = function(str){
	/**
	 * size : ���� ����Ʈ ������
	 * c : char
	 * i : ����
	 * for �� ���鼭 size�� add add! > ��
	 */
	var size, c, i;
	for(size=i=0;c=str.charCodeAt(i++);size+=c>>11?2:c>>7?2:1);
	return size;
}