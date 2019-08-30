import React from 'react';
import _ from 'lodash';
import ability from 'config/ability';
import PercentageGraph from 'components/percentageGraph/percentageGraph';

const Ability = () => (
    <article id="ability">
        <h2 className="sub-header">Ability</h2>
        <hr />
        {
            ability.map((eachAbility, i) => {
                return (<section key={i}>
                    <h3>{eachAbility.type}</h3>
                    <ul className="list-unstyled list-inline">
                        {
                            _.sortBy(eachAbility.mapping, ['score', 'type']).slice(0).reverse().map((eachMapping, j) => {
                                return (<li key={j}>
                                    <span className="label-title">{`${eachMapping.type} (${eachMapping.desciption})`}</span>
                                    <PercentageGraph
                                        className="label-content"
                                        percentage={eachMapping.score}
                                    />
                                </li>);
                            })
                        }
                    </ul>
                </section>);
            })
        }
    </article>
);

export default Ability;
