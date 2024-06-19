#!/bin/bash
{
# 定义$TARGET_DIR =当前目录
TARGET_DIR=$(pwd)

G_EXEC() {
    local cmd="$@"
    local desc="${G_EXEC_DESC:-$cmd}"
    local noexit="${G_EXEC_NOEXIT:-0}"
    local output="${G_EXEC_OUTPUT:-0}"
    local output_col="${G_EXEC_OUTPUT_COL:-}"

    echo "Executing: ${desc}"

    if [[ $output -eq 1 ]]; then
        # 如果设置了输出，则使用指定的颜色输出
        if [[ -n $output_col ]]; then
            echo -e "${output_col}"
        fi
        eval "$cmd"
        local status=$?
    else
        # 否则，非交互式执行并隐藏输出
        eval "$cmd" &> /dev/null
        local status=$?
    fi

    if [[ $status -ne 0 ]]; then
        echo -e "\e[31mError: The command exited with status $status. Command was: ${cmd}\e[0m"
        [[ $noexit -eq 0 ]] && exit $status
    fi
}


# Bootstrap
# G_EXEC curl -sSf 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' -o css/bootstrap.css
# G_EXEC curl -sSf 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js' -o js/bootstrap.js

# Minify
# - Minify JavaScript
# for i in js/*.js
# do
# $minifiedFile = $i -replace '\.js$', '.min.js'
# uglifyjs "$i" -c -m --output "$minifiedFile"

# done
# 压缩 js
i='./vendor/mixitup/mixitup.js'
minifiedFile="${i%.js}.min.js"
uglifyjs "$i" -c -m --output "$minifiedFile"

# - 压缩 CSS
for i in assets/css/*.css
do
# i='./assets/css/animate.css'
minifiedFile="${i%.css}.min.css"
cleancss -o "$minifiedFile" "$i"
done


# - 压缩html
html-minifier ./dev.html -o ./index.html --collapse-whitespace --remove-attribute-quotes --remove-comments
}
