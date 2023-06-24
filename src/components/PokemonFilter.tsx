import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"
import { Select, Option } from "@material-tailwind/react";

const PokemonFilter: React.FC = () => {
    const [generation, setGeneration] = useState('');
    const [type, setType] = useState('');
    const [count, setCount] = useState('');

    const handleChangeGeneration = (event:React.ChangeEvent<HTMLInputElement>): void =>setGeneration(event.target.value);
    const handleChangeType = (event:React.ChangeEvent<HTMLInputElement>): void => setType(event.target.value);
    const handleChangeCount = (event:React.ChangeEvent<HTMLInputElement>): void => setCount(event.target.value);


    const handleClick = () => {
        // ここで検索処理を実行
        console.log(generation, type, count);
    }

    return (
        <div className="PokemonFilter">
            <div className="filter-wrapper">
              <Select 
                value={generation}
                onChange={(event) => handleChangeGeneration(event)}
                variant="outlined" label="世代"
              >
                <Option value="">なし</Option>
                <Option value="1">第1世代</Option>
                <Option value="2">第2世代</Option>
                <Option value="3">第3世代</Option>
                <Option value="4">第4世代</Option>
                <Option value="5">第5世代</Option>
                <Option value="6">第6世代</Option>
                <Option value="7">第7世代</Option>
              </Select>
              <Select 
                  value={type} 
                  onChange={handleChangeType}
                  variant="outlined" label="タイプ"
              >
                <Option value="">なし</Option>
                <Option value="normal">ノーマル</Option>
                <Option value="fire">ほのお</Option>
                <Option value="water">みず</Option>
                <Option value="electricity">でんき</Option>
                <Option value="grass">くさ</Option>
                <Option value="ice">こおり</Option>
                <Option value="fighting">かくとう</Option>
                <Option value="poison">どく</Option>
                <Option value="ground">じめん</Option>
                <Option value="flying">ひこう</Option>

                <Option value="esper">エスパー</Option>
                <Option value="insect">むし</Option>
                <Option value="rock">いわ</Option>
                <Option value="ghost">ゴースト</Option>
                <Option value="dragon">ドラゴン</Option>
                <Option value="steel">はがね</Option>
              </Select>
              <Select 
                  value={count} 
                  onChange={handleChangeCount}
                  variant="outlined" label="件数"
              >
                <Option value="">件数</Option>
                <Option value="5">5件</Option>
                <Option value="10">10件</Option>
                <Option value="20">20件</Option>
                <Option value="30">30件</Option>
                <Option value="50">50件</Option>
                <Option value="100">100件</Option>
              </Select>
              <button className="search-button" onClick={handleClick}>
                <FaSearch />
              </button>
            </div>
        </div>
    )
}

export default PokemonFilter;
