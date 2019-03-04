import { exec } from 'child_process';

const HELP_STDOUT = `Usage: jaco [options] <path or string>

Options:
  -V, --version                      output the version number
  -K, --katakanize <path or string>  convert to Katakana
  -H, --hiraganize <path or string>  convert to Hiragana
  -h, --help                         output usage information
`;

test('引数なしでヘルプが出力', done => {
  exec('./bin/jaco', (error, stdout) => {
    expect(stdout).toEqual(HELP_STDOUT);
    expect(error).toBeFalsy();
    done();
  });
});

test('引数 -h でヘルプが出力', done => {
  exec('./bin/jaco -h', (error, stdout) => {
    expect(stdout).toEqual(HELP_STDOUT);
    expect(error).toBeFalsy();
    done();
  });
});

test('引数 --help でヘルプが出力', done => {
  exec('./bin/jaco -h', (error, stdout) => {
    expect(stdout).toEqual(HELP_STDOUT);
    expect(error).toBeFalsy();
    done();
  });
});

test('引数 -K のみでエラー出力', done => {
  exec('./bin/jaco -K', (error, stdout, stderr) => {
    expect(stderr.trim()).toEqual(
      "error: option `-K, --katakanize <path or string>' argument missing"
    );
    expect(error).toBeTruthy();
    done();
  });
});

test('引数 -H のみ', done => {
  exec('./bin/jaco -H', (error, stdout, stderr) => {
    expect(stderr.trim()).toEqual(
      "error: option `-H, --hiraganize <path or string>' argument missing"
    );
    expect(error).toBeTruthy();
    done();
  });
});

// test('引数 -K と 文字列', () => {
//   exec('./bin/jaco -K あいうえお', (error, stdout) => {
//     const line = stdout.split(/[\n\r]+/);
//     t.is(line[0], 'アイウエオ');
//     t.falsy(error);
//     t.end();
//   });
// });

// test('引数 -H と 文字列', () => {
//   exec('./bin/jaco -H アイウエオ', (error, stdout) => {
//     const line = stdout.split(/[\n\r]+/);
//     t.is(line[0], 'あいうえお');
//     t.falsy(error);
//     t.end();
//   });
// });

// test('引数 -H と -K と 文字列', () => {
//   exec('./bin/jaco -H ドラえもん -K ドラえもん', (error, stdout) => {
//     const line = stdout.split(/[\n\r]+/);
//     t.is(line[0], 'どらえもん');
//     t.is(line[1], 'ドラエモン');
//     t.falsy(error);
//     t.end();
//   });
// });

// test('引数 -H と -K と 文字列 (順序逆)', () => {
//   exec('./bin/jaco -K ドラえもん -H ドラえもん', (error, stdout) => {
//     const line = stdout.split(/[\n\r]+/);
//     t.is(line[0], 'ドラエモン');
//     t.is(line[1], 'どらえもん');
//     t.falsy(error);
//     t.end();
//   });
// });

// test('引数 -K と テキストファイル', () => {
//   exec('./bin/jaco -K test/test.txt', (error, stdout) => {
//     const line = stdout.split(/[\n\r]+/);
//     t.is(line[0], 'テスト');
//     t.is(line[1], 'テスト');
//     t.is(line[2], 'テスト');
//     t.falsy(error);
//     t.end();
//   });
// });

// test('引数 -H と テキストファイル', () => {
//   exec('./bin/jaco -H test/test.txt', (error, stdout) => {
//     const line = stdout.split(/[\n\r]+/);
//     t.is(line[0], 'てすと');
//     t.is(line[1], 'てすと');
//     t.is(line[2], 'てすと');
//     t.falsy(error);
//     t.end();
//   });
// });
