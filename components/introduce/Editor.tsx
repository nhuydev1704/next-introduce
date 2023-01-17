import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const checkImage = (file: File) => {
    const types = ['image/png', 'image/jpeg'];
    let err = '';
    if (!file) return (err = 'Tập tin không tồn tại.');

    if (file.size > 1024 * 1024) err = 'Kích cỡ vượt quá 1mb.';

    if (!types.includes(file.type)) err = 'Ảnh không đúng định dạnh png / jpg.';

    return err;
};

// {
//     disabled,
//     handleCallbackContent,
//     refContent,
//     handleCallbackContentNotDebounce,
// }: {
//     disabled?: boolean;
//     refContent: any;
//     handleCallbackContent: (value: string) => void;
//     handleCallbackContentNotDebounce: (value: string) => void;
// }

const NewsEditor = () => {
    const [content, setContent] = React.useState('');
    // const debounceContent = useDebounce(content, 300);

    // React.useEffect(() => {
    //     handleCallbackContent(debounceContent);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [debounceContent]);

    // React.useEffect(() => {
    //     setContent(refContent);
    // }, [refContent]);

    return (
        <div className="pt-[80px]">
            <input id="my-file-upload" accept="image/*" type="file" name="my-file-upload" style={{ display: 'none' }} />
            <Editor
                // disabled={disabled}
                value={content}
                // onEditorChange={(ct) => {
                //     setContent(ct);
                //     handleCallbackContentNotDebounce(ct);
                // }}
                apiKey="hjuz02bsvcykwi6ruki9xpuarsd6l8txzaouzknog6xef2w5"
                init={{
                    placeholder: 'Nhập nôi dung tin tức ...',
                    height: 680,
                    content_style: 'body { font-family:Quicksand,sans-serif; font-size:14px }',
                    plugins: [
                        'advlist',
                        'autolink',
                        'lists',
                        'link',
                        'image',
                        'preview',
                        'searchreplace',
                        'fullscreen',
                        'insertdatetime',
                        'media',
                        'table',
                        'help',
                        'wordcount',
                    ],
                    toolbar:
                        'undo redo | blocks | ' +
                        'image media ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',

                    default_link_target: '_blank',
                    entity_encoding: 'raw',
                    menubar: true,
                    statusbar: true,
                    branding: false,
                    // file_picker_callback: async function (callback, value, meta) {
                    //     if (meta?.filetype === 'image') {
                    //         let input: any = document.getElementById('my-file-upload');
                    //         input.click();
                    //         input.onchange = async () => {
                    //             var file = input.files[0];
                    //             const check = checkImage(file);
                    //             if (check !== '' && check) {
                    //                 return;
                    //             }

                    //             const fmData = new FormData();
                    //             const config = {
                    //                 headers: {
                    //                     Accept: 'multipart/form-data',
                    //                     'Content-Type': 'multipart/form-data',
                    //                 },
                    //             };
                    //             fmData.append('file', file);
                    //             AxiosClient.post('/files/upload/single/image', fmData, config).then((res) => {
                    //                 if (res?.data?.url) {
                    //                     callback(res?.data?.url, {
                    //                         alt: file.name,
                    //                     });
                    //                 }
                    //             });
                    //         };
                    //     }
                    // },
                }}
            />
        </div>
    );
};

export default NewsEditor;
