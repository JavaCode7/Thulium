fn = arg[1]
out = arg[2]

function file_exists(file)
    local f = io.open(file, "rb")
    if f then f:close() end
    return f ~= nil
  end

function lines_from(file)
  if not file_exists(file) then return {} end
  lines = {}
  for line in io.lines(file) do
      lines[#lines + 1] = line
  end
  return lines
end

function read()
    local file = arg[1]
    local lines = lines_from(file)
    local res = {}

    for k,v in pairs(lines) do
        k = nil
        res[#res + 1] = v
    end
    return res
end

function compile()
    compiled = ""
    parsed = read()
    for s, i in pairs(parsed) do
        if i == "mov_right" then
            compiled = compiled .. "0"
        elseif i == "mov_left" then
            compiled = compiled .. "1"
        elseif i == "mov_up" then
            compiled = compiled .. "2"
        elseif i == "mov_down" then
            compiled = compiled .. "3"
        elseif i == "spec_right" then
            compiled = compiled .. "4"
        elseif i == "spec_left" then
            compiled = compiled .. "5"
        elseif i == "print" then
            compiled = compiled .. "6"
        elseif i == "SP to M" then
            compiled = compiled .. "7"
        elseif i == "M to C" then
            compiled = compiled .. "8"
        elseif i == "C to M" then
            compiled = compiled .. "9"
        elseif i == "add" then
            compiled = compiled .. "A"
        elseif i == "sub" then
            compiled = compiled .. "B"
        elseif i == "update" then
            compiled = compiled .. "C"
        end
    end
    return compiled
end

tlmc = io.open(out, "w+")

tlmc:write(compile())

tlmc:close()