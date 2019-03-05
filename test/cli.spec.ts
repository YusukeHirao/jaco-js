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
    expect(stdout).toBe(HELP_STDOUT);
    expect(error).toBeFalsy();
    done();
  });
});

test('引数 -h でヘルプが出力', done => {
  exec('./bin/jaco -h', (error, stdout) => {
    expect(stdout).toBe(HELP_STDOUT);
    expect(error).toBeFalsy();
    done();
  });
});

test('引数 --help でヘルプが出力', done => {
  exec('./bin/jaco --help', (error, stdout) => {
    expect(stdout).toBe(HELP_STDOUT);
    expect(error).toBeFalsy();
    done();
  });
});

test('引数 -K のみでエラー出力', done => {
  exec('./bin/jaco -K', (error, stdout, stderr) => {
    expect(stderr.trim()).toBe(
      "error: option `-K, --katakanize <path or string>' argument missing"
    );
    expect(error).toBeTruthy();
    done();
  });
});

test('引数 -H のみ', done => {
  exec('./bin/jaco -H', (error, stdout, stderr) => {
    expect(stderr.trim()).toBe(
      "error: option `-H, --hiraganize <path or string>' argument missing"
    );
    expect(error).toBeTruthy();
    done();
  });
});

test('引数 -K と 文字列', done => {
  exec('./bin/jaco -K あいうえお', (error, stdout) => {
    const line = stdout.split(/[\n\r]+/);
    expect(line[0]).toBe('アイウエオ');
    expect(error).toBeFalsy();
    done();
  });
});

test('引数 -H と 文字列', done => {
  exec('./bin/jaco -H アイウエオ', (error, stdout) => {
    const line = stdout.split(/[\n\r]+/);
    expect(line[0]).toBe('あいうえお');
    expect(error).toBeFalsy();
    done();
  });
});

test('引数 -H と -K と 文字列', done => {
  exec('./bin/jaco -H ドラえもん -K ドラえもん', (error, stdout) => {
    const line = stdout.split(/[\n\r]+/);
    expect(line[0]).toBe('どらえもん');
    expect(line[1]).toBe('ドラエモン');
    expect(error).toBeFalsy();
    done();
  });
});

test('引数 -H と -K と 文字列 (順序逆)', done => {
  exec('./bin/jaco -K ドラえもん -H ドラえもん', (error, stdout) => {
    const line = stdout.split(/[\n\r]+/);
    expect(line[0]).toBe('ドラエモン');
    expect(line[1]).toBe('どらえもん');
    expect(error).toBeFalsy();
    done();
  });
});

test('引数 -K と テキストファイル', done => {
  exec('./bin/jaco -K test/test.txt', (error, stdout) => {
    const line = stdout.split(/[\n\r]+/);
    expect(line[0]).toBe('テスト');
    expect(line[1]).toBe('テスト');
    expect(line[2]).toBe('テスト');
    expect(error).toBeFalsy();
    done();
  });
});

test('引数 -H と テキストファイル', done => {
  exec('./bin/jaco -H test/test.txt', (error, stdout) => {
    const line = stdout.split(/[\n\r]+/);
    expect(line[0]).toBe('てすと');
    expect(line[1]).toBe('てすと');
    expect(line[2]).toBe('てすと');
    expect(error).toBeFalsy();
    done();
  });
});
