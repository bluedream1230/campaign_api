function originTemplate({ width = 500 } = {}) {
  return `<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><!--[if gte mso 9]><xml><o:officedocumentsettings><o:allowpng><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings></xml><![endif]--></head><body class="" style="font-family:sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;line-height:1.4;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;background-color:#f6f6f6;margin:0;padding:0"><table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse:separate;mso-table-lspace:0;mso-table-rspace:0;background-color:#f6f6f6;width:100%" width="100%" bgcolor="#f6f6f6"><tr><td style="font-family:sans-serif;font-size:14px;vertical-align:top" valign="top">&nbsp;</td><td class="container" style="font-family:sans-serif;font-size:14px;vertical-align:top;max-width:900px;padding:10px;margin:0 auto;width:auto" valign="top"><div class="content" style="box-sizing:border-box;display:block;margin:0 auto;max-width:900px;padding:10px"><div class="header" style="margin-bottom:20px;margin-top:10px;width:100%"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;mso-table-lspace:0;mso-table-rspace:0;width:100%;min-width:100%" width="100%"><tr><td class="aligncenter" style="font-family:sans-serif;font-size:14px;vertical-align:top;text-align:center" align="center" valign="top"><a href="https://commercial.nextres.com" target="_blank" style="color:#3498db;text-decoration:underline"><img src="https://amres-images-nextres-temp.s3.us-east-2.amazonaws.com/NextRes-Logo.png" width="120" alt="Nextres Logo" align="center" style="border:none;-ms-interpolation-mode:bicubic;max-width:100%"></a></td></tr></table></div><table class="main" style="border-collapse:separate;mso-table-lspace:0;mso-table-rspace:0;background:#fff;border-radius:3px;width:100%" width="100%"><tr><td class="wrapper" style="font-family:sans-serif;font-size:14px;vertical-align:top;box-sizing:border-box;padding:20px 40px;text-align:center" valign="top" align="center"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;mso-table-lspace:0;mso-table-rspace:0;width:${width}px" width="${width}px" align="center"><tr><td style="font-family:sans-serif;font-size:14px;vertical-align:top" valign="top">{{content}}</td></tr></table></td></tr></table><div class="foot-header" style="margin-bottom:10px;margin-top:30px;width:100%"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;mso-table-lspace:0;mso-table-rspace:0;width:100%" width="100%"><tr><td class="aligncenter" style="font-family:sans-serif;font-size:14px;vertical-align:top;text-align:center" valign="top" align="center"><a href="https://commercial.nextres.com" target="_blank" style="color:#3498db;text-decoration:underline"><img src="https://amres-images-nextres-temp.s3.us-east-2.amazonaws.com/NextRes-Logo.png" width="120" alt="Nextres Logo" align="center" style="border:none;-ms-interpolation-mode:bicubic;max-width:100%"></a></td></tr></table></div><div class="footer" style="clear:both;padding-top:10px;text-align:center;width:100%"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;mso-table-lspace:0;mso-table-rspace:0;width:100%" width="100%"><tr><td class="content-block powered-by" style="font-family:sans-serif;vertical-align:top;padding-top:10px;padding-bottom:10px;color:#999;font-size:12px;text-align:center" valign="top" align="center">AOOMIN: 2321794<br>12 Penns Trail Suite 138 Newtown, PA 18940</td></tr></table></div></div></td><td style="font-family:sans-serif;font-size:14px;vertical-align:top" valign="top">&nbsp;</td></tr></table></body></html>`;
}

var funcs = {
  // Title
  element1: function (data) {
    return `<h1 class="h1 color1" style="min-width: 450px; font-family: sans-serif; line-height: 1.4; margin: 0; font-size: 19px; font-weight: 700; text-align: center; text-transform: capitalize; margin-top: 20px; margin-bottom: 27px; color: #33A8F0;">${data[0]}</h1>`;
  },

  // Explain
  element2: function (data) {
    return `<h4 class="h4" style="color: #222222; font-family: sans-serif; line-height: 1.4; margin: 0; text-align: center; font-size: 14px; font-weight: 500; margin-bottom: 24px;">${data[0]}</h4>`;
  },

  // Property1
  element3: function (data) {
    return `<h4 class="h4" style="color: #222222; font-family: sans-serif; line-height: 1.4; margin: 0; text-align: center; font-size: 14px; font-weight: 500; margin-bottom: 24px;">${data[0]}: <br/><span class="bold" style="font-weight: 700;">${data[1]}</span></h4>`;
  },

  // Property2 color
  element4: function (data) {
    return `<h4 class="h4" style="color: #222222; font-family: sans-serif; line-height: 1.4; margin: 0; text-align: center; font-size: 14px; font-weight: 500; margin-bottom: 24px;">${data[0]}: <br/><span class="bold color1" style="font-weight: 700; color: #33A8F0;">${data[1]}</span></h4>`;
  },

  // Title sub1
  element5: function (data) {
    return `<h2 class="h2" style="color: #222222; font-family: sans-serif; line-height: 1.4; margin: 0; text-align: center; font-size: 20px; font-weight: 600; margin-bottom: 15px; margin-bottom: 20px;">${data[0]}</h2>`;
  },

  // Button Link
  element6: function (data) {
    return `<table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse:separate;mso-table-lspace:0;mso-table-rspace:0;box-sizing:border-box;width:100%;min-width:100%;margin-top: 20px;" width="100%"><tbody><tr><td align="center" style="font-family:sans-serif;font-size:14px;vertical-align:top;padding-bottom:15px" valign="top"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:separate;mso-table-lspace:0;mso-table-rspace:0;width:auto"><tbody><tr><td style="font-family:sans-serif;font-size:14px;vertical-align:top;border-radius:5px;text-align:center;background-color:#33a8f0" valign="top" align="center" bgcolor="#33A8F0"><a class="a" href="${data[0]}" target="_blank" style="border:solid 1px #3498db;border-radius:5px;box-sizing:border-box;cursor:pointer;display:inline-block;font-size:14px;font-weight:700;margin:0;padding:12px 40px;text-decoration:none;text-transform:capitalize;background-color:#33a8f0;border-color:#33a8f0;color:#fff">${data[1]}</a></td></tr></tbody></table></td></tr></tbody></table>`;
  },

  // Property1: value (Horizontal)
  element7: function (data) {
    return `<h4 class="h4" style="display: flex; color: #222222; font-family: sans-serif; line-height: 1.4; margin: 0; text-align: center; font-size: 14px; font-weight: 500; margin-bottom: 12px;">${data[0]}: <br/><span class="bold" style="font-weight: 700; margin-left: 10px">${data[1]}</span></h4>`;
  },

  // Title sub1 Left
  element8: function (data, fontSize: number = 16) {
    return `<h2 class="h2" style="color: #222222; font-family: sans-serif; line-height: 1.4; margin: 0; text-align: left; font-size: ${fontSize}px; font-weight: 600; margin-top: 20px; margin-bottom: 10px;">${data[0]}</h2>`;
  },

  // Table Header
  table: function (header: string[], body: string[][]) {
    return (
      `<table width="100%">` +
      emailFuncs.tableHeader(header) +
      `<tbody>` +
      body.map((row) => emailFuncs.tableCell(row)).join("") +
      `</tbody></table>`
    );
  },
  tableHeader: function (data: string[]) {
    return (
      `<thead style="background-color: #eee">
        <tr>` +
      data
        .map(
          (v) => `<th
                      style="
                        border-bottom: 1px solid #f2f2f2;
                        font-size: 13px;
                        color: #333;
                        line-height: 1.4;
                        text-align: left;
                        padding-left: 10px;
                        text-transform: uppercase;
                        padding: 5px;
                      "
                    >
                      ${v}
                    </th>`
        )
        .join("") +
      `</tr>
      </thead>`
    );
  },

  tableCell: function (data: string[]) {
    return (
      `<tr>` +
      data
        .map(
          (v) => `<td
                      style="
                        border-bottom: 1px solid #f2f2f2;
                        text-align: left;
                        font-size: 13px;
                        padding-left: 10px;
                        padding: 5px;
                        color: #444;
                      "
                    >
                      ${v}
                    </td>`
        )
        .join("") +
      `</tr>`
    );
  },
};

export const emailFuncs = funcs;

export function getEmailHtml(
  list: Array<{ type: string; data: Array<string | number> }>
) {
  let content = "";
  list.map((item) => {
    const { type, data } = item;
    content += funcs[type](data);
  });
  let message = originTemplate();
  message = message.replace("{{content}}", content);
  return message;
}

export function getEmailHtmlWithContent(content: string, options: any = {}) {
  let message = originTemplate(options);
  message = message.replace("{{content}}", content);
  return message;
}
