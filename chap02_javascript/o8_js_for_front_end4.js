// FormData in POST

const formData = new FormData();

formData.append('name', 'john');
formData.append('item', 'apple');
formData.append('item', 'melon');

formData.has('item');           // true
formData.has('money')           // false

formData.get('item');           // apple
formData.getAll('item');        // ['apple', 'melon'];

formData.append('test', ['hi', 'john']);
formData.get('test');   // hi, john

formData.delete('test');
formData.get('test');     // null

formData.set('item', 'pineapple');
formData.getAll('item');          //


// const result = await axios.post('https:/www. ....com/api/post/formdata', formData);


// encodeURIComponent, decodeURIComponent
// const result = await axios.post(`https:/www. ....com/api/search/${encodeURIComponent('ノード')}`);

// * URL : サーバーにある'ファイル'の位置     VS.     * URI : サーバにある'リソース'の位置 (Using more URI than URL)