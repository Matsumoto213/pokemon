import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"

const PokemonFilter: React.FC = () => {
    const [generation, setGeneration] = useState('');
    const [type, setType] = useState('');
    const [count, setCount] = useState('');

    const handleClick = () => {
        // ここで検索処理を実行
        console.log(generation, type, count);
    }

    return (
        <div className="PokemonFilter">
            <div className="filter-wrapper">
              <select 
                  value={generation} 
                  onChange={(e) => setGeneration(e.target.value)}
              >
                <option value="">世代</option>
                <option value="1">第1世代</option>
                <option value="2">第2世代</option>
                <option value="3">第3世代</option>
                <option value="4">第4世代</option>
                <option value="5">第5世代</option>
                <option value="6">第6世代</option>
                <option value="7">第7世代</option>
              </select>
              <select 
                  value={type} 
                  onChange={(e) => setType(e.target.value)}
              >
                <option value="">タイプ</option>
                <option value="normal">ノーマル</option>
                <option value="fire">ほのお</option>
                <option value="water">みず</option>
                <option value="electricity">でんき</option>
                <option value="grass">くさ</option>
                <option value="ice">こおり</option>
                <option value="fighting">かくとう</option>
                <option value="poison">どく</option>
                <option value="ground">じめん</option>
                <option value="flying">ひこう</option>

                <option value="esper">エスパー</option>
                <option value="insect">むし</option>
                <option value="rock">いわ</option>
                <option value="ghost">ゴースト</option>
                <option value="dragon">ドラゴン</option>
                <option value="steel">はがね</option>
              </select>
              <select 
                  value={count} 
                  onChange={(e) => setCount(e.target.value)}
              >
                <option value="">件数</option>
                <option value="5">5件</option>
                <option value="10">10件</option>
                <option value="20">20件</option>
                <option value="30">30件</option>
                <option value="50">50件</option>
                <option value="100">100件</option>
              </select>
              <button className="search-button" onClick={handleClick}>
                <FaSearch />
              </button>
            </div>
        </div>
    )
}

export default PokemonFilter;
